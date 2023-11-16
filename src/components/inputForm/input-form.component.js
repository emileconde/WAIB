import { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import PALETTE from "../../util/palette";
import {
  capitalizeFirstLetter,
  formatDate,
  provideDropDownOptions,
} from "./../../util/utils";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

const InputForm = ({ screenType, uid, addUserdata, isExpense = false }) => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  const [isErrorTextVisisble, setIsErrorTextvisisble] = useState(false);
  const [isSuccessTextVisisble, setIsSuccessTextVisisble] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [group, setGroup] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  //This variable can be want or need. 'want' by default. Change if you're more creative.
  const [want, setWant] = useState("Want");
  const [dropdownKey, setDropdownKey] = useState(1);

  const handleSave = async () => {
    if (type === "" || amount === "" || group == null) {
      setIsErrorTextvisisble(true);
      setErrorMessage("Please, fill out every input field.");
      setTimeout(() => {
        setIsErrorTextvisisble(false);
      }, 3000);
      return;
    } else {
      const userData =
        isExpense == true
          ? { type, amount, frequency, want, group, date }
          : { type, amount, frequency, group, date };
      addUserdata(uid, screenType, userData);
      setIsSuccessTextVisisble(true);
      setSuccessMessage(`${capitalizeFirstLetter(type)} successfuly saved.`);
      setTimeout(() => {
        setIsSuccessTextVisisble(false);
      }, 3000);
      resetDropdown();
      setAmount("");
      setType("");
      setFrequency("weekly");
      setWant("want");
      setDate(new Date());
    }
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const resetDropdown = () => {
    setGroup(null);
    setDropdownKey((prevKey) => prevKey + 1);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(formatDate(currentDate));
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  return (
    <View style={styles.container} key={dropdownKey}>
      <TextInput
        style={styles.inputBase}
        placeholder="Title"
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

      <RNPickerSelect
        onValueChange={(value) => setGroup(value)}
        items={provideDropDownOptions(screenType)}
        placeholder={{
          label: "Select group...",
          value: null,
          color: PALETTE.neutral.darkGrey,
        }}
        style={{
          inputIOS: styles.groupDropdown,
          inputAndroid: styles.groupDropdown,
        }}
      />
      <TouchableOpacity
        style={styles.dateDisplayContainer}
        onPress={toggleDatePicker}
      >
        <Text>Select Date: </Text>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === "ios" ? "default" : "spinner"}
          value={date}
          onChange={onChange}
        />
      )}
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
  groupDropdown: {
    // Define the width and other styles for the dropdown
    width: 280, // Set the width here
    padding: 10,
    borderWidth: 1.5,
    borderColor: PALETTE.primary.darkBlue,
    borderRadius: 4,
    alignSelf: "center",
    paddingRight: 30,
  },
  dateDisplayContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  dateText: {
    color: PALETTE.secondary.softGreen,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default InputForm;
