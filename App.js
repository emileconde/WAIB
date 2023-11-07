import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/contexts/auth/auth-context";
import { AuthStackNavigator } from "./src/route/navigation/auth/auth-navigation";
import AppNav from "./src/route/navigation/nav/app-nav";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
