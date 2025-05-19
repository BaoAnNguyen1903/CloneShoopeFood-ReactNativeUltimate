import { Link } from "expo-router";
import { Text, View } from "react-native";

const AppRoot = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Hello World with bao an</Text>
      <Link style={{ color: "red" }} href={"/home"}>
        Go to home
      </Link>
    </View>
  );
};

export default AppRoot;
