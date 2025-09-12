import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Index() {
  type dataType = {
    id: string; //refer to unique identifier
    title: string; //text we will show in list
  }
  //All caps bc data array wont change
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];

  // create a simple function telling me what was selected

  const selectedList = (item: dataType) =>
  {
    console.log(item.title);
    setSelectedId(item.id);

  }
  const [selectedId, setSelectedId] = useState<string>("1");
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
          data = {DATA}
          keyExtractor={(item: dataType) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress = {() => selectedList(item)}>
              <View style = {styles.flatListRow}> 
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>

          )
          }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
    padding: 10,
  },
  flatListRow: {
    backgroundColor: "cadetblue",
    padding: 10,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
