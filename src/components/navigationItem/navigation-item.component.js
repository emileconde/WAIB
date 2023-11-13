import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PALETTE from "../../util/palette";

const NavigationItem = ({ onPress, imageSrc, title, description }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image source={imageSrc} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: PALETTE.neutral.white,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: PALETTE.neutral.darkGrey,
  },
});

export default NavigationItem;
