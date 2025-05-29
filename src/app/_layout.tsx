import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    // <View style={{ paddingTop: 50 }}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <RootSiblingParent>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/verify" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/login"
            options={{ headerTitle: "Đăng nhập", headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </RootSiblingParent>
  );
};

export default RootLayout;
