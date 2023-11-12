import InputScreen from "../../components/inputScreen/input-screen.component";

const SCREEN_TYPE = "expenses";
const SCREEN_NAME = "Expenses";
const ExpensesScreen = ({ navigation }) => {
  return (
    <InputScreen
      screenName={SCREEN_NAME}
      screenType={SCREEN_TYPE}
      isExpense={true}
    />
  );
};

export default ExpensesScreen;
