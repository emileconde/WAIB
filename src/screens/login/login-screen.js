import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../contexts/auth/auth-context";
import { userFriendlyErrorMessage } from "../../util/utils";
import PALETTE from "../../util/palette";
import BackgroundImage from "../../components/backgroungImage/background-image";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorTextVisisble, setIsErrorTextvisisble] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      //console.log(userFriendlyErrorMessage(error));
      setIsErrorTextvisisble(true);
      setErrorMessage(userFriendlyErrorMessage(error));
      setTimeout(() => {
        setIsErrorTextvisisble(false);
      }, 3000);
    }
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.welcomTextContainer}>
          <Text style={[styles.textBase, styles.welcomeText]}>
            Welcome Back!
          </Text>
          <Text style={[styles.textBase, styles.welcomeActionText]}>
            Please enter your email and password to log in.
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TextInput
            style={styles.inputBase}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBase, styles.passwordInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {isErrorTextVisisble && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <TouchableOpacity style={[styles.buttonBase]} onPress={handleLogin}>
            <Text style={styles.textBase}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.haveAccountView}>
          <Text style={{ ...styles.textBase, fontSize: 12 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup-screen");
            }}
          >
            <Text style={styles.signUpActionText}>Sign Up! </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  errorText: {
    color: PALETTE.accent.warmOrange,
    marginBottom: 10,
  },

  textBase: {
    color: PALETTE.neutral.white,
    fontSize: 15,
  },

  inputBase: {
    height: 50,
    width: 250,
    margin: 8,
    borderWidth: 1.5,
    padding: 10,
    borderColor: PALETTE.primary.darkBlue,
    color: PALETTE.neutral.darkGrey,
    backgroundColor: PALETTE.neutral.white,
    fontSize: 13,
  },
  buttonBase: {
    height: 50,
    width: 200,
    backgroundColor: PALETTE.primary.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 10,
    borderWidth: 2,
    borderColor: PALETTE.neutral.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    marginBottom: 20,
  },
  buttonsContainer: {
    height: 350,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(211, 211, 211, 0.2)",
    zIndex: 0,
  },

  welcomTextContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  haveAccountView: {
    flexDirection: "row",

    gap: 5,
  },
  welcomeText: {
    fontSize: 30,
  },
  welcomeActionText: {
    fontSize: 15,
  },
  signUpActionText: {
    color: PALETTE.primary.darkBlue,
    fontSize: 12,
  },
  passwordInput: {
    marginBottom: 40,
  },
});

export default LoginScreen;
