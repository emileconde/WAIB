import InputScreen from "../../components/inputScreen/input-screen.component";

const SCREEN_TYPE = "savings";
const SCREEN_NAME = "Savings";
const SavingsScreen = ({ navigation }) => {
  return <InputScreen screenName={SCREEN_NAME} screenType={SCREEN_TYPE} />;
};

export default SavingsScreen;
