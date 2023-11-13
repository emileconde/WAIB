//Capitalise the first letter of a string
export const capitalalizeFirstLetter = () => {};

//Takes Firebase errors messages and displays them in a way that my cat can understand
export const userFriendlyErrorMessage = (error) => {
  const errorCode = error.code;
  const formattedErrorMessage = errorCode
    .split("/")[1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return formattedErrorMessage;
};
