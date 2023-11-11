import { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";

const InputForm = ({
  screenName,
  screenType,
  uid,
  addUserdata,
  isExpense = false,
}) => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  //This can be want or need. Change if you're more creative.
  const [want, setWant] = useState("want");

  const handleSave = async () => {
    const userData =
      isExpense == true
        ? { type, amount, frequency, want }
        : { type, amount, frequency };
    addUserdata(uid, screenType, userData);
    setAmount("");
    setType("");
    setFrequency("Weekly");
    setWant("want");
  };

  return (
    <View style={styles.container}>
      <Text>{`${screenName} Screen`}</Text>
      <Text>{`${screenName} Type`}</Text>
      <TextInput
        style={styles.input}
        placeholder="primary"
        value={type}
        onChangeText={setType}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="50000"
        value={amount}
        onChangeText={setAmount}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Frequency</Text>
      <RadioButton.Group
        onValueChange={(value) => setFrequency(value)}
        value={frequency}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <RadioButton value="weekly" />
            <Text>Weekly</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <RadioButton value="bi-weekly" />
            <Text>Bi-Weekly</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton value="monthly" />
            <Text>Monthly</Text>
          </View>
        </View>
      </RadioButton.Group>
      {isExpense == true ? (
        <View>
          <Text>Is this a want or a need?</Text>
          <RadioButton.Group
            onValueChange={(value) => setWant(value)}
            value={want}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <RadioButton value="want" />
                <Text>Want</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="need" />
                <Text>Need</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      ) : null}
      <Button title="Submit" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InputForm;
