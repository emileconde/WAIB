import { useEffect, useState, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import DataItem from "../dataItem/data-item.component";
import { AppContext } from "../../contexts/app/app-context";

const DataList = ({ data, uid, screenType, isExpense }) => {
  const { deleteUserData } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <DataItem
              type={item.type}
              id={item.id}
              amount={item.amount}
              frequency={item.frequency}
              want={item.want}
              uid={uid}
              screenType={screenType}
              onDelete={deleteUserData}
              isExpense={isExpense}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexGrow: 2 },
});

export default DataList;
