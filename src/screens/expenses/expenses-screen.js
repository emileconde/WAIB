import {
  EXPENSES_SCREEN_NAME,
  EXPENSES_SCREEN_TYPE,
} from "../../../assets/static/constants";
import InputScreen from "../../components/inputScreen/input-screen.component";

const ExpensesScreen = ({ navigation }) => {
  return (
    <InputScreen
      screenName={EXPENSES_SCREEN_NAME}
      screenType={EXPENSES_SCREEN_TYPE}
      isExpense={true}
    />
  );
};

export default ExpensesScreen;
