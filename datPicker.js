import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatPicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(formatDate(currentDate));
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Date Picker" onPress={toggleDatePicker} />
      {showPicker && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === "ios" ? "default" : "spinner"}
          value={date}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatPicker;
