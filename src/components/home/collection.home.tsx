import { StyleSheet, Text, View } from "react-native";

interface IProps {
  name: string;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
    height: 250,
    marginBottom: 10,
    width: "100%"
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
