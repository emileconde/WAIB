import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PALETTE from "../../util/palette";
import {
  capitalizeFirstLetter,
  formatDateFromFirestoreTimestamp,
  formatMoney,
} from "../../util/utils";
import {
  EXPENSES_SCREEN_TYPE,
  INCOME_SCREEN_TYPE,
} from "../../../assets/static/constants";

const DataItem = ({
  uid,
  id,
  type,
  amount,
  frequency,
  group,
  date,
  want = "",
  screenType,
  onDelete,
  isExpense,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Image
            source={
              screenType === INCOME_SCREEN_TYPE
                ? require("../../../assets/income-icon.png")
                : screenType === EXPENSES_SCREEN_TYPE
                ? require("../../../assets/expenses-icon.png")
                : require("../../../assets/savings-icon.png")
            }
            style={styles.image}
          />
          <Text style={[styles.text, styles.type]}>
            {capitalizeFirstLetter(type)}
          </Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/amount-icon.png")}
            style={styles.image}
          />

          <Text style={styles.text}>{`$${formatMoney(parseInt(amount))}`}</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/frequency-icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>{capitalizeFirstLetter(frequency)}</Text>
        </View>

        {isExpense == true ? (
          <View style={styles.row}>
            <Image
              source={
                want.startsWith("W") // Want
                  ? require("../../../assets/want-icon.png")
                  : require("../../../assets/need-icon.png")
              }
              style={styles.image}
            />
            <Text style={styles.text}>{want}</Text>
          </View>
        ) : null}
        <View style={styles.row}>
          <Image
            source={require("../../../assets/group-icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>{capitalizeFirstLetter(group)}</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/date-icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            {formatDateFromFirestoreTimestamp(date)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          onDelete(uid, screenType, id);
        }}
      >
        <AntDesign name="delete" size={20} color={PALETTE.accent.warmOrange} />
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
    backgroundColor: PALETTE.neutral.lightGrey,
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
    fontSize: 14,
    color: PALETTE.neutral.darkGrey,
  },
  type: {
    fontWeight: "bold",
    color: PALETTE.secondary.softGreen,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default DataItem;
