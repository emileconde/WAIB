import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GraphScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Graph Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GraphScreen;
