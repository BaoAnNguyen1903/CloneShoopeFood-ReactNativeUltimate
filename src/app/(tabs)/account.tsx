import { useCurrentTheme } from "@/context/app.context";
import { Text, View } from "react-native";

const AccountTab = () => {
  const { theme } = useCurrentTheme();
  return (
    <View>
      <Text>AccountTab page, theme = {theme}</Text>
    </View>
  );
};

export default AccountTab;
