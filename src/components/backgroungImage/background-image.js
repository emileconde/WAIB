import { View, StyleSheet, ImageBackground } from "react-native";
const BackgroundImage = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background-img.jpg")}
        style={styles.image}
      >
        <View style={styles.overlay}>{children}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

export default BackgroundImage;
