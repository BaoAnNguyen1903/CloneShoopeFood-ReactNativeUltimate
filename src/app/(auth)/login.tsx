import { Text, View } from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 5 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            marginVertical: 30
          }}
        >
          Đăng ký tài khoản
        </Text>
      </View>

      <ShareInput title="Họ tên" value={name} setValue={setName} />
      <ShareInput
        title="Email"
        keyboardType="email-address"
        value={email}
        setValue={setEmail}
      />
      <ShareInput
        title="Password"
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <View style={{ marginVertical: 10 }}></View>

      <ShareButton
        title="ĐĂNG KÝ"
        onPress={handleSignUp}
        textStyle={{ color: "#fff", paddingVertical: 5 }}
        btnStyle={{
          justifyContent: "center",
          borderRadius: 30,
          marginHorizontal: 35,
          paddingVertical: 12,
          backgroundColor: APP_COLOR.ORANGE,
          borderWidth: 1,
          borderColor: "#505050",
          width: "82%"
        }}
        pressStyle={{ alignSelf: "stretch" }}
      />
      <View
        style={{
          marginVertical: 15,
          flexDirection: "row",
          gap: 10,
          justifyContent: "center"
        }}
      >
        <Text style={{ textAlign: "center", color: "black" }}>
          Đã có tài khoản?
        </Text>
        <Link href={"/signup"}>
          <Text style={{ textDecorationLine: "underline", color: "black" }}>
            Đăng nhập.
          </Text>
        </Link>
      </View>
      <SocialButton />
    </View>
  );
};

export default LoginPage;
