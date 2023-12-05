import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { AppContext } from "../../contexts/app/app-context";
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const { currentUser, getUserData } = useContext(AppContext);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState(0); // 0 for All, 1 for Income, 2 for Savings, 3 for Expenses
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    fetchData();
  }, [currentUser.uid, selectedType]);

  const fetchData = async () => {
    let userData;
    if (selectedType === 1) {
      userData = await getUserData(currentUser.uid, INCOME_SCREEN_TYPE);
    } else if (selectedType === 2) {
      userData = await getUserData(currentUser.uid, SAVINGS_SCREEN_TYPE);
    } else if (selectedType === 3) {
      userData = await getUserData(currentUser.uid, EXPENSES_SCREEN_TYPE);
    } else {
      userData = await getUserData(currentUser.uid, 'all');
    }
    const formattedData = transformDataForCalendar(userData);
    setMarkedDates(formattedData);
  };

  // Transform data to be used in the calendar
  const transformDataForCalendar = (data) => {
    let calendarData = {};
    data.forEach(item => {
      // Format the date to match calendar date keys
      const formattedDate = formatDateForCalendar(item.date); 

      if (!calendarData[formattedDate]) {
        calendarData[formattedDate] = { marked: true, dotColor: 'blue' };
      }

    });
    return calendarData;
  };
  const renderDataForSelectedDate = () => {
  if (!selectedDate) return null;

  const dataForSelectedDate = Data.filter(item => 
    formatDateForCalendar(item.date) === selectedDate
  );

  return (
    <View style={styles.dataContainer}>
      {dataForSelectedDate.map((item, index) => (
        <View key={index} style={styles.dataItem}>
          <Text>Type: {item.type}</Text>
          <Text>Amount: {item.amount}</Text>
        </View>
      ))}
    </View>
  );
};
  

return (
  <View>
    <Calendar
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
    {renderDataForSelectedDate()}
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalendarScreen;
