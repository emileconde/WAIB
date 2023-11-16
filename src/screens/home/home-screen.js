import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/auth-context";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { AppContext } from "../../contexts/app/app-context";
import PALETTE from "../../util/palette";
import NavigationItem from "../../components/navigationItem/navigation-item.component";
import NavigationList from "../../components/navigationItemList/navigation-item-list.component";
import SegmentedControlTab from "react-native-segmented-control-tab";

const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  // useEffect(() => {
  //   logout();
  // }, []);

  return (
    <View style={styles.container}>
      <Button title="logout" onPress={logout} />
      <NavigationList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.neutral.lightGrey,
    justifyContent: "space-around",
    gap: 10,
  },
  navigateText: {
    color: PALETTE.neutral.darkGrey,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
});

export default HomeScreen;
