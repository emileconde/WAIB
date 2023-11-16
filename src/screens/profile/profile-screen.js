import { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from "react-native";

const AboutScreen = () => {
  return (
    <View>
      <Button title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default AboutScreen;
