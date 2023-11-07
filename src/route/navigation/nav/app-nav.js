import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/auth-context";
import { View, ActivityIndicator } from "react-native";
import { AppStackNavigator } from "../app/app-navigation";
import { AuthStackNavigator } from "../auth/auth-navigation";

const AppNav = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {currentUser !== null ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNav;
