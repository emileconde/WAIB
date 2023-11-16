import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/contexts/auth/auth-context";
import AppNav from "./src/route/navigation/nav/app-nav";
import { AppProvider } from "./src/contexts/app/app-context";
import Toast from "react-native-toast-message";
import PALETTE from "./src/util/palette";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <SafeAreaView style={styles.container}>
          <AppNav />
          <Toast />
        </SafeAreaView>
      </AppProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: PALETTE.neutral.lightGrey,
  },
});
