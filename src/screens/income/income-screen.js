import {
  INCOME_SCREEN_NAME,
  INCOME_SCREEN_TYPE,
} from "../../../assets/static/constants";
import InputScreen from "../../components/inputScreen/input-screen.component";

const IncomesScreen = ({ navigation }) => {
  return (
    <InputScreen
      screenName={INCOME_SCREEN_NAME}
      screenType={INCOME_SCREEN_TYPE}
    />
  );
};
export default IncomesScreen;
