import { Slot } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ paddingTop: 50 }}>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  );
};

export default RootLayout;
