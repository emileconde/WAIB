import { View, ActivityIndicator, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/auth-context";
import { AppStackNavigator } from "../app/app-navigation";
import { AuthStackNavigator } from "../auth/auth-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PALETTE from "../../../util/palette";
import ProfileScreen from "../../../screens/profile/profile-screen";

const Tab = createBottomTabNavigator();
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
      {currentUser !== null ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconPath;

              if (route.name === "Data") {
                iconPath = focused
                  ? require("../../../../assets/finance-data-icon.png")
                  : require("../../../../assets/finance-data-icon.png");
              } else if (route.name === "Profile") {
                iconPath = focused
                  ? require("../../../../assets/profile-icon.png")
                  : require("../../../../assets/profile-icon.png");
              }

              return (
                <Image
                  source={iconPath}
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            },
            tabBarActiveTintColor: PALETTE.accent.warmOrange,
            tabBarInactiveTintColor: PALETTE.neutral.white,
            tabBarStyle: [
              {
                display: "flex",
                backgroundColor: PALETTE.primary.darkBlue,
              },
              null,
            ],
            headerShown: false,
            headerStyle: {
              backgroundColor: "#275175",
            },
            headerTintColor: "white",
          })}
        >
          <Tab.Screen name="Data" component={AppStackNavigator} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNav;
