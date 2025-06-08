import { useCurrentApp } from "@/context/app.context";
import { Text, View } from "react-native";

const AccountTab = () => {
  const { theme, appState } = useCurrentApp();
  return (
    <View>
      <Text>AccountTab page, appState = {JSON.stringify(appState)}</Text>
    </View>
  );
};

export default AccountTab;
