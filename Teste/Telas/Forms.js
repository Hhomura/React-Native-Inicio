import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import StylesDefault from "../Styles/StylesDefault";
//COMPONETES
import InputForms from "../Components/InputForms";
import BtnForms from "../Components/BtnForms";

export default class Forms extends Component {
    render(){
        return(
            <View style={StylesDefault.container}>
                <ImageBackground source={require('../Assets/back.jpg')}
                resizeMode="cover"
                style={StylesDefault.img}
                >
                <Text style = {StylesDefault.Titulo}>Forms da Lain</Text>
                <InputForms titulo = "nome"/>
                <InputForms titulo = "idade" type = "numeric"/>
                <InputForms titulo = "Apelido"/>
                <InputForms titulo = "email" type = "email-address"/>
                <InputForms titulo = "profissao"/>
                <InputForms titulo = "Anime Favorito"/>
                <BtnForms/>
                </ImageBackground>
                
            </View>
        )
    }
}