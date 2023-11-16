import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth-context";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from "react-native";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default ProfileScreen;
