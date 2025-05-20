import { Text, TextInput, View } from "react-native";

const SignUpPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Đăng ký tài khoản</Text>
      </View>
      <View>
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
