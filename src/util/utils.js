import {
  EXPENSES_OPTIONS,
  EXPENSES_SCREEN_NAME,
  INCOME_OPTIONS,
  INCOME_SCREEN_NAME,
  SAVINGS_OPTIONS,
  SAVINGS_SCREEN_NAME,
} from "../../assets/static/constants";

//Provides the right data for the drop down menu based on the screenType
export const provideDropDownOptions = (screenType) => {
  let options =
    screenType === "incomes"
      ? INCOME_OPTIONS
      : screenType === "savings"
      ? SAVINGS_OPTIONS
      : EXPENSES_OPTIONS;
  return options;
};

export const capitalizeFirstLetter = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//Takes Firebase errors messages and displays them in a way that my cat can understand
export const userFriendlyErrorMessage = (error) => {
  const errorCode = error.code;
  const formattedErrorMessage = errorCode
    .split("/")[1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return formattedErrorMessage;
};

//Tranform the sum entered by the user into an easily readable String to display
export const formatMoney = (amount) =>
  amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Return screenName based on index. Used in GraphScreen when there is no data to show
export const getScreenName = (index) => {
  switch (index) {
    case 0:
      return INCOME_SCREEN_NAME;
    case 1:
      return SAVINGS_SCREEN_NAME;
    case 2:
      return EXPENSES_SCREEN_NAME;
  }
};

//Transforms data so that it can be displyed on the pie chart
export const parseData = (userData) => {
  const data = JSON.parse(JSON.stringify(userData));
  const total = data.reduce((acc, curr) => acc + Number(curr.amount), 0);

  const groupedData = data.reduce((acc, curr) => {
    acc[curr.group] = (acc[curr.group] || 0) + Number(curr.amount);
    return acc;
  }, {});

  // Chart color palette
  const colors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF",
    "#FFB5A7",
    "#FF9B85",
    "#F28B82",
    "#F7BD02",
    "#E6C9A8",
    "#C0CA33",
    "#A5D6A7",
    "#80CBC4",
    "#64B5F6",
    "#BA68C8",
    "#FF8A65",
    "#D84315",
  ];

  const processedData = Object.keys(groupedData).map((group, index) => ({
    x: group,
    y: ((groupedData[group] / total) * 100).toFixed(2),
    color: colors[index % colors.length],
  }));

  // Create legend data
  const legendData = processedData.map((datum) => ({
    name: capitalizeFirstLetter(datum.x),
    color: capitalizeFirstLetter(datum.color),
  }));

  return { chartData: processedData, legendData };
};
