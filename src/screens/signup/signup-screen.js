import { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AuthContext } from "../../contexts/auth/auth-context";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
    } catch (error) {
      // Update state with error message
      console.log("Error logging in: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignUpScreen;
