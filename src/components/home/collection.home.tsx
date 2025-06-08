import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  name: string;
  desciption: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sale: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: APP_COLOR.ORANGE,
    padding: 3,
    borderRadius: 3,
    alignItems: "flex-start"
  }
});

const CollectionHome = (props: IProps) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default CollectionHome;
