import { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import PALETTE from "../../util/palette";

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
  const [isErrorTextVisisble, setIsErrorTextvisisble] = useState(false);
  const [isSuccessTextVisisble, setIsSuccessTextVisisble] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //This can be want or need. 'want' by default. Change if you're more creative.
  const [want, setWant] = useState("want");

  const handleSave = async () => {
    if (type === "" || amount === "") {
      setIsErrorTextvisisble(true);
      setErrorMessage("Please, fillout every input field.");
      setTimeout(() => {
        setIsErrorTextvisisble(false);
      }, 3000);
      return;
    } else {
      const userData =
        isExpense == true
          ? { type, amount, frequency, want }
          : { type, amount, frequency };
      addUserdata(uid, screenType, userData);
      setIsSuccessTextVisisble(true);
      setSuccessMessage(`${type} successfuly saved.`);
      setTimeout(() => {
        setIsSuccessTextVisisble(false);
      }, 3000);
      setAmount("");
      setType("");
      setFrequency("weekly");
      setWant("want");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBase}
        placeholder="Type"
        value={type}
        onChangeText={setType}
        keyboardType="default"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputBase}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="number-pad"
        autoCapitalize="none"
      />

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
            <RadioButton value="weekly" color={PALETTE.secondary.softGreen} />
            <Text>Weekly</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <RadioButton
              value="bi-weekly"
              color={PALETTE.secondary.softGreen}
            />
            <Text>Bi-Weekly</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton value="monthly" color={PALETTE.secondary.softGreen} />
            <Text>Monthly</Text>
          </View>
        </View>
      </RadioButton.Group>
      {isExpense == true ? (
        <View>
          <Text style={styles.wantText}>Is this a want or a need?</Text>
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
                <RadioButton value="Want" color={PALETTE.secondary.softGreen} />
                <Text>Want</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="Need" color={PALETTE.secondary.softGreen} />
                <Text>Need</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      ) : null}
      {isErrorTextVisisble && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      {isSuccessTextVisisble && (
        <Text style={styles.successText}>{successMessage}</Text>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSave}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PALETTE.neutral.lightGrey,
  },
  errorText: {
    color: PALETTE.accent.warmOrange,
    margin: 10,
  },
  successText: {
    color: PALETTE.secondary.softGreen,
    margin: 10,
  },
  submitText: {
    color: PALETTE.neutral.white,
  },
  wantText: {
    color: PALETTE.neutral.darkGrey,
  },
  submitButton: {
    height: 40,
    width: 150,
    backgroundColor: PALETTE.primary.darkBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBase: {
    height: 50,
    width: 250,
    margin: 8,
    borderWidth: 1.5,
    padding: 10,
    borderColor: PALETTE.primary.darkBlue,
    color: PALETTE.neutral.darkGrey,
    backgroundColor: PALETTE.neutral.white,
    fontSize: 13,
  },
});

export default InputForm;
