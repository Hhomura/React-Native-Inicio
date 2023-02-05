import React from "react";
import {View, Text, TextInput} from 'react-native';
import StylesDefault from "../Styles/StylesDefault";

export default ((props) =>{
    return(
        <View style={StylesDefault.InputContainer}>
            <Text style={StylesDefault.labelInput}>{props.titulo}</Text>

            <TextInput
            style={StylesDefault.input}
            keyboardType= {props.type}
            />

        </View>
    )
})