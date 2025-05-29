import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};

export default TabLayout;
