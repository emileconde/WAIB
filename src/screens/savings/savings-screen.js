import {
  SAVINGS_SCREEN_NAME,
  SAVINGS_SCREEN_TYPE,
} from "../../../assets/static/constants";
import InputScreen from "../../components/inputScreen/input-screen.component";

const SavingsScreen = ({ navigation }) => {
  return (
    <InputScreen
      screenName={SAVINGS_SCREEN_NAME}
      screenType={SAVINGS_SCREEN_TYPE}
    />
  );
};

export default SavingsScreen;
