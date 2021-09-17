import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => (
  <View>
    <Text> HOMESCREEN </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
      <Text>Categories</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
