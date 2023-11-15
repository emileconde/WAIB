import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const LogoAnimation = ({ left = 0, top = 0 }) => {
  return (
    <View
      style={{
        ...styles.container,
        left: left,
        top: top,
      }}
    >
      <LottieView
        style={styles.logo}
        source={require("../../../assets/animations/logo-animation.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 200,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});

export default LogoAnimation;
