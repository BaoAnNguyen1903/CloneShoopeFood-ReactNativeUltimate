import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Home</Text>
      <Link href={"/"} style={{ color: "red" }}>
        Back
      </Link>
    </View>
  );
};

export default HomeScreen;
