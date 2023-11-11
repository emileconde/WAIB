import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AppContext } from "../../contexts/app/app-context";
import InputForm from "../../components/inputForm/input-form.component";

const SCREEN_TYPE = "incomes";
const SCREEN_NAME = "Incomes";
const IncomesScreen = ({ navigation }) => {
  const { currentUser, addUserData, getUserData } = useContext(AppContext);
  useEffect(() => {
    //console.log("USER: ", currentUser);
    // const getData = async () => {
    //   const incomes = await getUserData(currentUser.uid, "income");
    //   console.log(incomes);
    // };
    // getData();
  }, [currentUser]);
  return (
    <View style={styles.container}>
      <InputForm
        screenName={SCREEN_NAME}
        screenType={SCREEN_TYPE}
        uid={currentUser.uid}
        addUserdata={addUserData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IncomesScreen;
