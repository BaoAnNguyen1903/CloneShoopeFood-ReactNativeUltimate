import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10
  }
});

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const res = await registerAPI(email, password, name);
      if (res.data) {
        router.navigate("/(auth)/verify");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log("err: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};

export default SignUpPage;
