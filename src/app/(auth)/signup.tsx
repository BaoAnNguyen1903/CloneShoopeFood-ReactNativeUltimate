import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 20,
    gap: 10
  },
  inputGroup: {
    padding: 5,
    gap: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5
  }
});

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Đăng ký tài khoản</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>Họ tên</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default SignUpPage;
