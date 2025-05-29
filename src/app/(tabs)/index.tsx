import { StyleSheet, Text, View } from "react-native";

const data = Array(10).fill(1);

const data1 = Array(20).fill(1);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    justifyContent: "center",
    overflow: "hidden"
  },
  header: {
    borderColor: "red",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  item: {
    borderColor: "green",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  list: {

  }
});

const HomeTab = () => {
  
  return (
    <View>
      <Text>HomeTab page</Text>
    </View>
  );
};

export default HomeTab;
