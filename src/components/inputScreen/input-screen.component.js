import { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { AppContext } from "../../contexts/app/app-context";
import InputForm from "../../components/inputForm/input-form.component";
import DataList from "../../components/dataList/DataList";
import PALETTE from "../../util/palette";

const InputScreen = ({ screenType, screenName, isExpense }) => {
  const { currentUser, addUserData, deleteUserData, startRealTimeListener } =
    useContext(AppContext);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isDataReturned, setIsDataReturned] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = startRealTimeListener(
      currentUser.uid,
      screenType,
      (newData) => {
        setData(newData);
        setIsDataReturned(newData.length > 0);
        console.log(newData);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser.uid, startRealTimeListener]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
    >
      <TouchableOpacity style={styles.addButton} onPress={toggleForm}>
        <Text style={styles.addText}>{showForm ? "-" : "+"}</Text>
      </TouchableOpacity>

      {showForm && (
        <InputForm
          screenName={screenName}
          screenType={screenType}
          uid={currentUser.uid}
          addUserdata={addUserData}
          isExpense={isExpense}
        />
      )}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={PALETTE.accent.warmOrange} />
        </View>
      ) : isDataReturned ? (
        <DataList
          data={data}
          uid={currentUser.uid}
          screenType={screenType}
          onDelete={deleteUserData}
          isExpense={isExpense}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Text
            style={styles.noDataText}
          >{`Please add some ${screenName}`}</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  addText: {
    color: PALETTE.primary.darkBlue,
    fontSize: 25,
    fontWeight: "bold",
    borderWidth: 1.5,
    borderColor: PALETTE.primary.darkBlue,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  noDataText: {
    color: PALETTE.neutral.darkGrey,
  },
});

export default InputScreen;
