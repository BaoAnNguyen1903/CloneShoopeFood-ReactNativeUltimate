import { Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const VerifyPage = () => {
  return (
    <View>
      <Text>VerifyPage page</Text>
      <OTPTextView inputCount={5} inputCellLength={2} />
    </View>
  );
};

export default VerifyPage;
