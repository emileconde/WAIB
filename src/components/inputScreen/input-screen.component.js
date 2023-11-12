import { useContext, useState, useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Button } from "react-native";
import { AppContext } from "../../contexts/app/app-context";
import InputForm from "../../components/inputForm/input-form.component";
import DataList from "../../components/dataList/DataList";
import { ActivityIndicator } from "react-native";

const InputScreen = ({ screenType, screenName, isExpense }) => {
  const { currentUser, addUserData, deleteUserData, startRealTimeListener } =
    useContext(AppContext);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // const unsubscribe = startRealTimeListener(currentUser.uid, SCREEN_TYPE);
    const unsubscribe = startRealTimeListener(
      currentUser.uid,
      screenType,
      (newData) => {
        //console.log("New data:", newData);
        setData(newData);
        setIsLoading(false);
      }
    );

    //setIsLoading(false);
    return () => unsubscribe();
  }, [currentUser.uid, startRealTimeListener]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled={false}
    >
      <Button title={showForm ? "-" : "+"} onPress={toggleForm} />
      {showForm && (
        <InputForm
          screenName={screenName}
          screenType={screenType}
          uid={currentUser.uid}
          addUserdata={addUserData}
        />
      )}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <DataList
          data={data}
          uid={currentUser.uid}
          screenType={screenType}
          onDelete={deleteUserData}
          isExpense={isExpense}
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InputScreen;
