import * as React from "react";
import { Text, View, ScrollView } from "react-native";
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

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;
  const { categories } = data;
  return (
    <View>
      <ScrollView>
        {categories.category.map((el, i) => (
          <Text key={i}>{el.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
