import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DataItem = ({
  uid,
  id,
  type,
  amount,
  frequency,
  want = "",
  screenType,
  onDelete,
  isExpense,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.text}>{amount}</Text>
        <Text style={styles.text}>{frequency}</Text>
        {isExpense == true ? <Text style={styles.text}>{want}</Text> : null}
      </View>
      <TouchableOpacity
        onPress={() => {
          onDelete(uid, screenType, id);
        }}
      >
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default DataItem;
