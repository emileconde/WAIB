import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../../../screens/home/home-screen";

const AppStack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="home-screen">
      <AppStack.Screen name="home-screen" component={HomeScreen} />
    </AppStack.Navigator>
  );
};
