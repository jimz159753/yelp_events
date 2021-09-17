import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CategoriesScreen from "./screens/Categories";

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Categories" component={CategoriesScreen} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
