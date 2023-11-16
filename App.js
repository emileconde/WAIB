import React from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/contexts/auth/auth-context";
import AppNav from "./src/route/navigation/nav/app-nav";
import { AppProvider } from "./src/contexts/app/app-context";
import Toast, { BaseToast } from "react-native-toast-message";
import PALETTE from "./src/util/palette";
import DatPicker from "./datPicker";

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
