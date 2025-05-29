import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

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
  list: {}
});

const HomeTab = () => {
  const MyComponent = () => {
    return (
      <View style={styles.topList}>
        <ScrollView>

        </ScrollView>
      </View>
    )
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomFlatList
        data={data}
        style={styles.list}
        renderItem={() => <View style={styles.item} />}
        HeaderComponent={<View style={styles.header} />}
        StickyElementComponent={<View style={styles.sticky} />}
        // TopListElementComponent={<View style={styles.topList} />}
        TopListElementComponent={<MyComponent />}
      />
    </SafeAreaView>
  );
};

export default HomeTab;
