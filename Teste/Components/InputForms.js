import React from "react";
import {View, Text, TextInput} from 'react-native';
import StylesDefault from "../Styles/StylesDefault";

export default ((props) =>{
    nameInput = props.value;
    
    return(
        <View style={StylesDefault.InputContainer}>
            <Text style={StylesDefault.labelInput}>{props.titulo}</Text>

            <TextInput
            style={StylesDefault.input}
            keyboardType= {props.type}
            onChangeText={text => props.alter(nameInput, text)}
            />

        </View>
    )
})