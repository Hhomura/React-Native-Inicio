import React, { Component } from "react";
import { Text, View as SafeAreaView, ImageBackground } from "react-native";
import StylesDefault from "../Styles/StylesDefault";
//COMPONETES
import InputForms from "../Components/InputForms";
import BtnForms from "../Components/BtnForms";



export default class Forms extends Component {
    state ={
        nome: "goku",
        idade: 19,
        apelido: "ap",
        email: "em",
        profissao: "prof",
        frase: "fra"
    }


    render(props){
        
        const alterInput = (alterNome) =>{
            this.setState({nome:alterNome});
        }

        const alterIdade = (alterId) =>{
            this.setState({idade:alterId});
        }

        const alterApelido = (alterAp) =>{
            this.setState({apelido:alterAp});
        }

        const alterEmail = (alterEm) =>{
            this.setState({email:alterEm});
        }

        const alterProfissao = (alterProf) =>{
            this.setState({profissao:alterProf});
        }

        const alterFrase = (alterFra) =>{
            this.setState({frase:alterFra})
        }

        console.log("Nome: "+this.state.nome +"\nIdade: "+this.state.idade+"\nApelido: "+this.state.apelido +"\nEmail: "+this.state.email +"\nProfissão: "+this.state.profissao +"\nFrase: "+this.state.frase)

        return(
            <SafeAreaView>
                <ImageBackground source={require('../Assets/back.jpg')}
                resizeMode="cover"
                style={StylesDefault.img}
                >
                <Text style = {StylesDefault.Titulo}>Forms da Lain</Text>
                <InputForms titulo = "nome" nome={this.state.nome} alter={alterInput}/>
                <InputForms titulo = "idade" type = "numeric" alter={alterIdade}/>
                <InputForms titulo = "Apelido" alter={alterApelido}/>
                <InputForms titulo = "email" type = "email-address" alter={alterEmail}/>
                <InputForms titulo = "profissao" alter={alterProfissao}/>
                <InputForms titulo = "Frase" alter={alterFrase}/>
                <BtnForms nav ={this.props.nav} inputs={[this.state.nome, this.state.idade, this.state.apelido, this.state.email, this.state.profissao, this.state.frase]}/>

                </ImageBackground>
                
            </SafeAreaView>
        )
    }
}