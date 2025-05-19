import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import ShareButton from "../components/button/share.button";
import { APP_COLOR } from "../utils/constant";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.body}>Antin Food</Text>
        <Text style={styles.footer}>
          Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
        </Text>
      </View>
      <View style={styles.welcomeBtn}>
        <Text>Đăng nhập với</Text>
        <View>
          <View>
            {/* <View style={styles.btnContent}>
              <Text style={styles.btnText}>Facebook</Text>
            </View> */}
            <ShareButton
              title="faceBook"
              onPress={() => alert("me")}
              textStyle={{ textTransform: "lowercase" }}
              pressStyle={{ alignSelf: "stretch" }}
              btnStyle={{
                backgroundColor: "green",
                justifyContent: "center",
                borderRadius: 50
              }}
              icons={<AntDesign name="pluscircle" size={30} color="black" />}
            />
          </View>
          <View>
            <Text>Google</Text>
          </View>
        </View>
        <View>
          <Text>Đăng nhập với email</Text>
        </View>
        <View>
          <Text>Chưa có tài khoản? Đăng ký.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 5
  },
  welcomeText: {
    flex: 0.6,
    borderColor: "green",
    borderWidth: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20
  },
  welcomeBtn: {
    flex: 0.4,
    borderColor: "grey",
    borderWidth: 5
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
  footer: {},
  btnContainer: {},
  btnContent: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
    alignSelf: "flex-start"
  },
  btnText: {
    textTransform: "uppercase"
  }
});

export default WelcomePage;
