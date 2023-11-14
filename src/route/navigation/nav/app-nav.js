import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/auth-context";
import { AppStackNavigator } from "../app/app-navigation";
import { AuthStackNavigator } from "../auth/auth-navigation";
import PALETTE from "../../../util/palette";

const AppNav = () => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <NavigationContainer>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={PALETTE.accent.warmOrange} />
        </View>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {currentUser !== null ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNav;
