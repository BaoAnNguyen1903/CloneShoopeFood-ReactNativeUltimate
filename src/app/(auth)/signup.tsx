import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  inputGroup: {
    borderColor: "red",
    borderWidth: 5
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  }
});

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Đăng ký tài khoản</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text>Họ tên</Text>
        <TextInput />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>
    </View>
  );
};

export default SignUpPage;
