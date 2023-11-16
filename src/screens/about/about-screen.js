import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import PALETTE from "../../util/palette";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>About 'Why Am I Broke'</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Manage Your Finances Effortlessly</Text>
          <Text style={styles.description}>
            'Why am I Broke' is a modern finance management app designed to help
            you keep track of your expenses and income. Gain insights into your
            spending habits and make informed decisions to achieve your
            financial goals.
          </Text>

          <Text style={styles.subtitle}>Features:</Text>
          <Text style={styles.feature}>- Track expenses and incomes</Text>
          <Text style={styles.feature}>
            - Categorize transactions for better clarity
          </Text>
          <Text style={styles.feature}>
            - Visualize your cash flow with detailed charts
          </Text>
          <Text style={styles.feature}>- Set budgets and monitor progress</Text>
          <Text style={styles.feature}>- Secure and private data handling</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>© 2023 waib. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.neutral.lightGrey,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: PALETTE.secondary.softGreen,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: PALETTE.neutral.lightGrey,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: PALETTE.neutral.darkGrey,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: PALETTE.secondary.softGreen,
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    color: PALETTE.neutral.darkGrey,
    marginBottom: 5,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: PALETTE.neutral.darkGrey,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default AboutScreen;
