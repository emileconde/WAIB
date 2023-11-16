import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import PALETTE from "../../util/palette";
import LogoAnimation from "../../components/logoAnimation/logo-animation.component";
import BackgroundImage from "../../components/backgroungImage/background-image";

const InfoScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <LogoAnimation left={80} top={30} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buttonBase, styles.loginButton]}
            onPress={() => {
              navigation.navigate("login-screen");
            }}
          >
            <Text style={styles.textBase}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonBase, styles.signUpButton]}
            onPress={() => {
              navigation.navigate("signup-screen");
            }}
          >
            <Text style={styles.textBase}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => {
            navigation.navigate("about-screen");
          }}
        >
          <Text style={[styles.textBase, styles.aboutText]}>About Us</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 280,
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
  signUpButton: {},
  textBase: {
    color: PALETTE.neutral.white,
    fontSize: 15,
  },
  buttonsContainer: {
    position: "absolute",
    height: 300,
    width: 250,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(211, 211, 211, 0.2)",
    top: "70%",
    left: "15%",
    zIndex: 0,
  },
  aboutText: {
    color: PALETTE.secondary.softGreen,
  },
  aboutButton: {
    marginBottom: 20,
  },
});

export default InfoScreen;
