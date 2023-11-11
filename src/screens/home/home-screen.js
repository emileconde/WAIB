import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/auth-context";
import { View, Text, StyleSheet, Button } from "react-native";
import { AppContext } from "../../contexts/app/app-context";

const HomeScreen = ({ navigation }) => {
  //const { loadUserIncomes } = useContext(AppContext);

  // useEffect(() => {
  //   loadUserIncomes();
  // }, []);

  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Log out"
        onPress={() => {
          logout();
        }}
      />
      <Button
        title="Expenses"
        onPress={() => {
          navigation.navigate("expenses-screen");
        }}
      />
      <Button
        title="Income"
        onPress={() => {
          navigation.navigate("income-screen");
        }}
      />
      <Button
        title="Savings"
        onPress={() => {
          navigation.navigate("savings-screen");
        }}
      />
      <Button
        title="Graphs"
        onPress={() => {
          navigation.navigate("graph-screen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
});

export default HomeScreen;
