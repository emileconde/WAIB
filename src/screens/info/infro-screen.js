import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("login-screen");
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("signup-screen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});

export default InfoScreen;
