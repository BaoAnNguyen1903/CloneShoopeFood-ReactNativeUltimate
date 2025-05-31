import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import { SafeAreaView, StyleSheet, View } from "react-native";

const data = Array(10).fill(1);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    padding: 8
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
    overflow: "hidden"
  },
  sticky: {
    backgroundColor: "#2555FF50",
    borderColor: "blue",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  // topList: {
  //   borderColor: "orange",
  //   borderWidth: 5,
  //   height: 100,
  //   marginBottom: 6,
  //   width: "100%"
  // }
});

const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomFlatList
        data={data}
        style={styles.list}
        renderItem={() => <View style={styles.item} />}
        // HeaderComponent={<HeaderHome />}
        // StickyElementComponent={<SearchHome />}
        // TopListElementComponent={<TopListHome />}
        HeaderComponent={<View style={styles.header}></View>}
        StickyElementComponent={<View style={styles.sticky}></View>}
        TopListElementComponent={<View style={styles.topList}></View>}
      />
    </SafeAreaView>
  );
};

export default HomeTab;
