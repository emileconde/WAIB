import { View, StyleSheet } from "react-native";

import PALETTE from "../../util/palette";
import NavigationList from "../../components/navigationItemList/navigation-item-list.component";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
