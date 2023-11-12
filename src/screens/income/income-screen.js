import InputScreen from "../../components/inputScreen/input-screen.component";

const SCREEN_TYPE = "incomes";
const SCREEN_NAME = "Incomes";
const IncomesScreen = ({ navigation }) => {
  return <InputScreen screenName={SCREEN_NAME} screenType={SCREEN_TYPE} />;
};
export default IncomesScreen;
