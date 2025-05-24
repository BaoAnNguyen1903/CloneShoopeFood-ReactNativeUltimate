import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";

const RootLayout = () => {
  return (
    // <View style={{ paddingTop: 50 }}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <RootSiblingParent>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        <Stack.Screen
          name="product/index"
          options={{ headerTitle: "Sản phẩm" }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{ headerTitle: "Đăng nhập" }}
        />
      </Stack>
    </RootSiblingParent>
  );
};

export default RootLayout;
