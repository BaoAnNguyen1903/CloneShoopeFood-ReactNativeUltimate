import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10
  },
  inputGroup: {
    padding: 5,
    gap: 10
  },
  text: {
    fontSize: 18
  },
  input: {
    borderColor: "#d0d0d0",
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5
  }
});

const SignUpPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ padding: 5 }}>
          <Text>Đăng ký tài khoản</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Họ tên</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <ShareButton
          title="ĐĂNG KÝ"
          onPress={() => alert("me")}
          textStyle={{ color: "#fff", paddingVertical: 5 }}
          btnStyle={{
            justifyContent: "center",
            borderRadius: 30,
            marginHorizontal: 35,
            paddingVertical: 15,
            backgroundColor: APP_COLOR.ORANGE,
            borderWidth: 1,
            borderColor: "#505050",
            width: "82%"
          }}
          pressStyle={{ alignSelf: "stretch" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
