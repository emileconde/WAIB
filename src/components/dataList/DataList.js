import { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import DataItem from "../dataItem/data-item.component";
import { AppContext } from "../../contexts/app/app-context";

const DataList = ({ data, uid, screenType, isExpense }) => {
  const { deleteUserData } = useContext(AppContext);
  return (
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
  );
};

export default DataList;
