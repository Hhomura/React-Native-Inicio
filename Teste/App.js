import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Telas
import Forms from "./Telas/Forms";
import Result from "./Telas/Result";
import { Button } from "react-native";

const guia = createNativeStackNavigator();

function Formulario ({navigation}){
  return(
    <Forms nav  = {navigation}/>
  )
}

export default (() =>{
  return(
    <NavigationContainer>
      <guia.Navigator initialRouteName="form" screenOptions={{headerShown: false}}>
        <guia.Screen
        name="form"
        component={Formulario}
        />
        <guia.Screen
        name="Result"
        component={Result}
        />
      </guia.Navigator>
    </NavigationContainer>
  )
})