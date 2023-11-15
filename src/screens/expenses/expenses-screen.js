import { EXPENSES_SCREEN_NAME } from "../../../assets/static/constants";
import InputScreen from "../../components/inputScreen/input-screen.component";

const ExpensesScreen = ({ navigation }) => {
  return (
    <InputScreen
      screenName={EXPENSES_SCREEN_NAME}
      screenType={EXPENSES_SCREEN_NAME}
      isExpense={true}
    />
  );
};

export default ExpensesScreen;
