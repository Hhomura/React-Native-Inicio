import React from 'react'
import {View as SafeAreaView, Text, Image, ImageBackground, View} from 'react-native';
import StyleResult from '../Styles/StyleResult';

export default ((props)=>{
    const inputs = props.route.params.inp;
    return(
        <SafeAreaView>
            <ImageBackground resizeMode='cover' source={require('../Assets/backResul.jpg')}
            style={StyleResult.img}>
            <Text style={StyleResult.titulo}>Tela de Resultado</Text>
            <View style={{marginTop: 20}}>
                <Text style={StyleResult.p}>Nome: {inputs[0]}</Text>
                <Text style={StyleResult.p}>Idade: {inputs[1]}</Text>
                <Text style={StyleResult.p}>Apelido: {inputs[2]}</Text>
                <Text style={StyleResult.p}>Email: {inputs[3]}</Text>
                <Text style={StyleResult.p}>Profissão: {inputs[4]}</Text>
                <Text style={StyleResult.p}>Frase: {inputs[5]}</Text>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
})