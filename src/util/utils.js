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
