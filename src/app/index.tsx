import { useCurrentApp } from "@/context/app.context";
import { getAccountAPI } from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { APP_COLOR } from "../utils/constant";

const WelcomePage = () => {
  const { setAppState } = useCurrentApp();

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await getAccountAPI();
      if (res.data) {
        //success
        setAppState({
          user: res.data.user,
          access_token: await AsyncStorage.getItem("access_token")
        });
        router.replace("/(tabs)");
      } else {
        //err
      }
    };
    fetchAccount();
  }, []);

  // if (true) {
  //   return(
  //   <Redirect href={"/(auth)/signup"} />
  //   )
  // }

  return (
    <>
      <View>
        <Text>root page</Text>
      </View>
    </>
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
