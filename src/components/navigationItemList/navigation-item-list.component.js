import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import NavigationItem from "../../components/navigationItem/navigation-item.component";

//You can change the images if you find better ones.
const navigationItemsData = [
  {
    id: "1",
    imageSrc: require("../../../assets/income-img.jpg"),
    title: "Income",
    description:
      "Easily track your earnings and income sources with our app, empowering you to gain insights into your financial stability and growth.",
    destination: "income-screen",
  },
  {
    id: "2",
    imageSrc: require("../../../assets/expenses-img.jpg"),
    title: "Expenses",
    description:
      " Manage your spending effortlessly by recording and categorizing your expenses, helping you visualize and control your financial outflows.",
    destination: "expenses-screen",
  },
  {
    id: "3",
    imageSrc: require("../../../assets/savings-img.jpg"),
    title: "Savings/Investments",
    description:
      "Secure your financial future by monitoring your savings and investments, ensuring you stay on track to meet your financial goals.",
    destination: "savings-screen",
  },
  {
    id: "4",
    imageSrc: require("../../../assets/graphs-img.jpg"),
    title: "Graph",
    description:
      "Visualize your financial data beautifully with interactive graphs, making it simple to understand and analyze your financial trends over time.",
    destination: "graph-screen",
  },

  {
    id: "5",
    imageSrc: require("../../../assets/calendar-img.jpg"),
    title: "Calendar",
    description:
      "Stay organized and plan your financial activities effectively using our intuitive calendar view, allowing you to schedule income, expenses, and savings/investment goals with ease.",
    destination: "calendar-screen",
  },
];

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
      data={navigationItemsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavigationList;
