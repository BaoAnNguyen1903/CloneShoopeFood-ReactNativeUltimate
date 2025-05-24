import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20
  }
})

const VerifyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Xác thực tài khoản</Text>
      <OTPTextView
        inputCount={6}
        inputCellLength={1}
        tintColor={APP_COLOR.ORANGE}
        textInputStyle={{
          borderWidth: 1,
          borderColor: APP_COLOR.GREY,
          borderBottomWidth: 1,
          borderRadius: 5
        }}
      />
    </View>
  );
};

export default VerifyPage;
