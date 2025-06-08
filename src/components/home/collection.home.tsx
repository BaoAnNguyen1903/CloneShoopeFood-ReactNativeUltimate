import { getTopRestaurant } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

interface IProps {
  name: string;
  desciption: string;
  refAPI: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  sale: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: APP_COLOR.ORANGE,
    padding: 3,
    borderRadius: 3,
    alignItems: "flex-start"
  }
});

const CollectionHome = (props: IProps) => {
  const { name, desciption, refAPI } = props;
  const data = [
    { key: 1, image: "", name: "cua hang 1" },
    { key: 2, image: "", name: "cua hang 2" },
    { key: 3, image: "", name: "cua hang 3" },
    { key: 4, image: "", name: "cua hang 4" },
    { key: 5, image: "", name: "cua hang 5" }
  ];

  const [restaurants, setRestaurants] = useState<ITopRestaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopRestaurant(refAPI);
      if (res.data) {
        //success
        setRestaurants(res.data);
      } else {
        //err
      }
    };
    fetchData();
  }, [refAPI]); // nếu refAPI thay đổi thì await getTopRestaurant(refAPI); sẽ thay đổi

  const backend =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_ANDROID_API_URL
      : process.env.EXPO_PUBLIC_IOS_API_URL;

  const baseImage = `${backend}/images/restaurant`;
  return (
    <>
      <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
      <View style={styles.container}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text
            style={{ color: APP_COLOR.ORANGE, fontSize: 16, fontWeight: "600" }}
          >
            {name}
          </Text>
          <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "#5a5a5a" }}>{desciption}</Text>
        </View>

        <FlatList
          data={restaurants}
          horizontal
          contentContainerStyle={{ gap: 5 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              // vì View không có sự kiện onPress nên dùng Pressable
              <Pressable
                // style để khít với view
                style={{ alignSelf: "flex-start" }}
                onPress={() => router.navigate("/product")}
              >
                <View style={{ backgroundColor: "#efefef" }}>
                  <Image
                    source={{ uri: `${baseImage}/${item.image}` }}
                    style={{ height: 130, width: 130 }}
                  />
                  <View style={{ padding: 5 }}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{ fontWeight: "600", maxWidth: 130 }}
                    >
                      {item.name}
                    </Text>
                    <View style={styles.sale}>
                      <Text style={{ color: APP_COLOR.ORANGE }}>
                        Flash Sale
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </>
  );
};

export default CollectionHome;
