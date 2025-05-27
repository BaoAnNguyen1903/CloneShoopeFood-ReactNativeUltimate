import { Button, Image, Text, TextInput, View } from "react-native";

const ProductPage = () => {
  return (
    <View>
      <Image source={require("@/assets/images/react-logo.png")} />
      <Text>Username</Text>
      <TextInput />
      <Text>Username</Text>
      <TextInput />
      <Button title="Đăng nhập" disabled={true} />
    </View>
  );
};

export default ProductPage;
