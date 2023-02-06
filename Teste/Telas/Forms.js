import React, { Component } from "react";
import { Text, View as SafeAreaView, ImageBackground } from "react-native";
import StylesDefault from "../Styles/StylesDefault";
//COMPONETES
import InputForms from "../Components/InputForms";
import BtnForms from "../Components/BtnForms";



export default class Forms extends Component {
    state ={
        nome: "goku",
        idade: "",
        apelido: "",
        email: "",
        profissao: "",
        frase: ""
    }

    render(props){
        
        const alterInput = (nome, alterNome) =>{
            this.setState({nome: alterNome});
        }

        return(
            <SafeAreaView>
                <ImageBackground source={require('../Assets/back.jpg')}
                resizeMode="cover"
                style={StylesDefault.img}
                >
                <Text style = {StylesDefault.Titulo}>Forms da Lain</Text>
                <InputForms titulo = "nome" nome={this.state.nome} alter={alterInput}/>
                <InputForms titulo = "idade" type = "numeric"/>
                <InputForms titulo = "Apelido"/>
                <InputForms titulo = "email" type = "email-address"/>
                <InputForms titulo = "profissao"/>
                <InputForms titulo = "Frase"/>
                <BtnForms nav ={this.props.nav}/>
                <Text style={{color: 'black', fontSize: 20}}>{this.state.nome}</Text>
                </ImageBackground>
                
            </SafeAreaView>
        )
    }
}