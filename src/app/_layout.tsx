import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    // <View style={{ paddingTop: 50 }}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Trang chủ" }} />
      <Stack.Screen
        name="product/index"
        options={{ headerTitle: "Sản phẩm" }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{ headerTitle: "Đăng nhập" }}
      />
    </Stack>
  );
};

export default RootLayout;
