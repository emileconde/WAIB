import { createStackNavigator } from "@react-navigation/stack";
import InfoScreen from "../../../screens/info/infro-screen";
import LoginScreen from "../../../screens/login/login-screen";
import SignUpScreen from "../../../screens/signup/signup-screen";

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="info-screen">
      <AuthStack.Screen
        name="info-screen"
        component={InfoScreen}
        options={{ title: "Welcome" }}
      />
      <AuthStack.Screen
        name="login-screen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="signup-screen"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />
    </AuthStack.Navigator>
  );
};
