import React from "react";
import {View, TouchableHighlight, Text, TouchableOpacity} from 'react-native';
import StylesDefault from "../Styles/StylesDefault";

export default((props) =>{
    navigation = props.nav;
    return(
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity style={StylesDefault.btn}
                onPress={()=>navigation.navigate('Result')}
                >
                    <Text style={StylesDefault.btnText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
    )
})