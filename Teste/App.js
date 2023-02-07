import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Telas
import Forms from "./Telas/Forms";
import Result from "./Telas/Result";

const guia = createNativeStackNavigator();

//AQUI EU SUBI UM NIVEL NA MINHA CARREIRA DE PROGRAMADOR:

function Formulario ({navigation}){
  return(
    <Forms nav  = {navigation}/>
  )
}

function Resultado ({route, navigation}){
  return(
    <Result route ={route} nav = {navigation}/>
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
        component={Resultado}
        />
      </guia.Navigator>
    </NavigationContainer>
  )
})