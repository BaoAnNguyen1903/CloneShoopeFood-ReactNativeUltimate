import LoadingOverlay from "@/components/loading/overlay";
import { verifyCodeAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Toast from "react-native-root-toast";

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
});

const VerifyPage = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const hanldeCellTextChange = async (text: string, i: number) => {
    console.log(">>>check text: ", text, " and i = ", i);
    if (i === 5 && text) {
      setIsSubmit(true);
      Keyboard.dismiss();
      const res = await verifyCodeAPI(email, code);
      setIsSubmit(false);
      if (res.data) {
        //succes
        alert("succes");
      } else {
        Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1 // tham so cua thu vien. opacity là độ mờ của backgourd mặc định là 0.8
        });
      }
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Xác thực tài khoản</Text>
        <Text style={{ marginVertical: 10 }}>
          Vui lòng nhập mã xác nhận đã được gửi tới địa chỉ{" "}
        </Text>
        <View style={{ marginVertical: 20 }}>
          <OTPTextView
            handleCellTextChange={hanldeCellTextChange}
            autoFocus
            inputCount={6}
            inputCellLength={1}
            tintColor={APP_COLOR.ORANGE}
            textInputStyle={{
              borderWidth: 1,
              borderColor: APP_COLOR.GREY,
              borderBottomWidth: 1,
              borderRadius: 5,
              // @ts-ignore: next-line, // djt me ao vl comment code ma` fix dc color
              color: APP_COLOR.ORANGE
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text>Không nhận được mã xác nhận,</Text>
          <Text style={{ textDecorationLine: "underline" }}> gửi lại</Text>
        </View>
      </View>
      {isSubmit && <LoadingOverlay />}
    </>
  );
};

export default VerifyPage;
