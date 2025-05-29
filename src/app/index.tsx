import TextBetweenLine from "@/components/button/text.between.line";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ShareButton from "../components/button/share.button";

import { APP_COLOR } from "../utils/constant";

const WelcomePage = () => {
  // if (true) {
  //   return(
  //   <Redirect href={"/(auth)/signup"} />
  //   )
  // }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("@/assets/auth/welcome-back.png")}
    >
      <LinearGradient
        style={{ flex: 1 }}
        colors={["transparent", "#191B2F"]}
        locations={[0.2, 0.8]}
      >
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.heading}>Welcome to</Text>
            <Text style={styles.body}>Antin Food</Text>
            <Text style={styles.footer}>
              Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
            </Text>
          </View>
          <View style={styles.welcomeBtn}>
            <TextBetweenLine title="Đăng nhập với" />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 30
                }}
              >
                {/* <View style={styles.btnContent}>
              <Text style={styles.btnText}>Facebook</Text>
            </View> */}
                <ShareButton
                  title="faceBook"
                  onPress={() => alert("me")}
                  textStyle={{ textTransform: "uppercase" }}
                  btnStyle={{
                    justifyContent: "center",
                    borderRadius: 30,
                    backgroundColor: "#fff"
                  }}
                  icons={
                    <FontAwesome5 name="facebook" size={30} color={"black"} />
                  }
                />

                <ShareButton
                  title="google"
                  onPress={() => alert("me")}
                  textStyle={{ textTransform: "uppercase" }}
                  btnStyle={{
                    justifyContent: "center",
                    borderRadius: 30,
                    paddingHorizontal: 20,
                    backgroundColor: "#fff"
                  }}
                  icons={
                    <FontAwesome5 name="google" size={30} color={"black"} />
                  }
                />
              </View>

              <View style={{ paddingTop: 30 }}>
                <ShareButton
                  title="Đăng nhập với email"
                  onPress={() => router.navigate("/(auth)/login")}
                  textStyle={{ color: "#fff", paddingVertical: 5 }}
                  btnStyle={{
                    justifyContent: "center",
                    borderRadius: 30,
                    marginHorizontal: 35,
                    paddingVertical: 15,
                    backgroundColor: "#2c2c2c",
                    borderWidth: 1,
                    borderColor: "#505050",
                    width: "82%"
                  }}
                  pressStyle={{ alignSelf: "stretch" }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Chưa có tài khoản?
              </Text>
              <Link href={"/(auth)/signup"}>
                <Text
                  style={{ textDecorationLine: "underline", color: "white" }}
                >
                  Đăng ký.
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  welcomeText: {
    flex: 0.6,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20
  },
  welcomeBtn: {
    flex: 0.4,
    gap: 30
  },
  heading: {
    fontSize: 40,
    fontWeight: "600"
  },
  body: {
    fontSize: 30,
    color: APP_COLOR.ORANGE,
    marginVertical: 10
  },
  footer: {
    color: "white"
  }
});

export default WelcomePage;
