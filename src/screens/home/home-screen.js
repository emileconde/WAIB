import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth-context";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
});

export default HomeScreen;
