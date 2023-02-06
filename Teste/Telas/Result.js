import React from 'react'
import {View as SafeAreaView, Text, Image, ImageBackground, View} from 'react-native';
import StyleResult from '../Styles/StyleResult';

export default ((props)=>{
    return(
        <SafeAreaView>
            <ImageBackground resizeMode='cover' source={require('../Assets/backResul.jpg')}
            style={StyleResult.img}>
            <Text style={StyleResult.titulo}>Tela de Resultado</Text>
            <View style={{marginTop: 20}}>
                <Text style={StyleResult.p}>Nome: </Text>
                <Text style={StyleResult.p}>Idade: </Text>
                <Text style={StyleResult.p}>Apelido: </Text>
                <Text style={StyleResult.p}>Email: </Text>
                <Text style={StyleResult.p}>Profissão: </Text>
                <Text style={StyleResult.p}>Frase: </Text>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
})