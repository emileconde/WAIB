import React from "react";
import { FlatList } from "react-native";
import NavigationItem from "../../components/navigationItem/navigation-item.component";
import { NAVIGATION_ITEMS_DATA } from "../../../assets/static/constants";

const NavigationList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <NavigationItem
      onPress={() => navigation.navigate(item.destination)}
      imageSrc={item.imageSrc}
      title={item.title}
      description={item.description}
    />
  );
  return (
    <FlatList
      data={NAVIGATION_ITEMS_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavigationList;
