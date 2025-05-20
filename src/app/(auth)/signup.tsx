import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
});

const SignUpPage = () => {
  return (
    <View style={styles.container}>
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
