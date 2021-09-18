import * as React from "react";
import { Text, View, ScrollView, StyleSheet, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_CATEGORIES = gql`
  query {
    categories {
      category {
        title
        alias
      }
    }
  }
`;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;
  const { categories } = data;
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View>
      <FlatList
        horizontal={true}
        data={categories.category}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
