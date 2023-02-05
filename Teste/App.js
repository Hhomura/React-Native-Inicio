import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Telas
import Forms from "./Telas/Forms";

const guia = createNativeStackNavigator();

export default (() =>{
  return(
    <NavigationContainer>
      <guia.Navigator screenOptions={{headerShown: false}}>
        <guia.Screen
        name="form"
        component={Forms}
        />
      </guia.Navigator>
    </NavigationContainer>
  )
})