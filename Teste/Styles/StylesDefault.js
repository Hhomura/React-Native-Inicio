import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    Titulo:{
        color: 'white',
        fontSize: 20,
        textAlign:'center' ,
        fontStyle: 'italic'
    }
    ,
    input:{
        height: 33,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        fontStyle: 'italic',
        backgroundColor: '#ddd',
        opacity: 0.5,
        fontSize: 14
    },
    labelInput:{
        color: 'white',
        fontSize: 12
    },
    InputContainer:{
        marginTop: 7,
        marginBottom: 7
    },
    btn:{
        marginTop: 15,
        height: 40,
        width: 150,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        padding: 7
    },
    btnText:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    img:{
        height: 800,
        padding: 20
    }
})