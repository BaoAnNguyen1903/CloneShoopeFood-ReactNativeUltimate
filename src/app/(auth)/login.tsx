import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10
  }
});

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // console.log(email, password);
  };

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
          Đăng nhập với
        </Text>
      </View>

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
        title="ĐĂNG NHẬP"
        onPress={handleLogin}
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
          Chưa có tài khoản?
        </Text>
        <Link href={"/signup"}>
          <Text style={{ textDecorationLine: "underline", color: "black" }}>
            Đăng ký
          </Text>
        </Link>
      </View>
      <SocialButton title="Đăng nhập với" />
    </View>
  );
};

export default LoginPage;
