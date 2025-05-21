import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import ShareButton from "./share.button";
import TextBetweenLine from "./text.between.line";

const styles = StyleSheet.create({
  welcomeBtn: {
    flex: 1,
    gap: 30
  }
});

const SocialButton = () => {
  return (
    <View style={styles.welcomeBtn}>
      <TextBetweenLine title="Đăng nhập với" />
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
          icons={<FontAwesome5 name="facebook" size={30} color={"black"} />}
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
          icons={<FontAwesome5 name="google" size={30} color={"black"} />}
        />
      </View>
    </View>
  );
};

export default SocialButton;
