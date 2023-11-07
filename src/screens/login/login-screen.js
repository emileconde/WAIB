import React, { useState, useContext } from "react"; // Removed useEffect
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AuthContext } from "../../contexts/auth/auth-context";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useContext(AuthContext); // Removed currentUser

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      // Update state with error message
      console.log("Error logging in: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Log In Screen</Text>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    // Add your input field styles here
  },
  // Add any other styles you might need
});

export default LoginScreen;
