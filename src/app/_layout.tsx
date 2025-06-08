import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import AppProvider from "../context/app.context";

const RootLayout = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"
    }
  };
  return (
    // <View style={{ paddingTop: 50 }}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <GestureHandlerRootView>
      <RootSiblingParent>
        <AppProvider>
          {/* <SafeAreaView style={{ flex: 1 }}> */}
          <ThemeProvider value={navTheme}>
            {/* lam background trong suot */}
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen
                name="(auth)/signup"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(auth)/verify"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(auth)/login"
                options={{ headerTitle: "Đăng nhập", headerShown: false }}
              />
              <Stack.Screen
                name="(auth)/welcome"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
          {/* </SafeAreaView> */}
        </AppProvider>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
