import { loginAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from "react-native";
import Toast from "react-native-root-toast";

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await loginAPI(email, password);
      setLoading(false);
      if (res.data) {
        router.replace("/(tabs)");
      } else {
        const m = Array.isArray(res.message) ? res.message[0] : res.message;
        Toast.show(m, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1 // tham so cua thu vien. opacity là độ mờ của backgourd mặc định là 0.8
        });

        if (res.statusCode === 400) {
          router.replace({
            pathname: "/(auth)/verify",
            params: { email: email, isLogin: 1 }
          });
        }
      }
    } catch (error) {
      console.log(">>> check err: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={styles.container}>
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
          loading={loading}
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
      </View> */}
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Button onPress={handleSubmit as any} title="Submit" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginPage;
