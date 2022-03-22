import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Subjectscreen from "../screens/Subjectscreen";
import TabNavigator from "./TabNavigator"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Subjectscreen" component={Subjectscreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;