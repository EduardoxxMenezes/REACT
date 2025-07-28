import React from "react";
import {View,TextInput, StyleSheet, Text} from "react-native";

export default function TextImputPI(){
    return(
        <View>
            <TextInput placeholder="Digite seu nome" style={styles.input}></TextInput>
            <Text style={styles.text}> Oque já foi feito no PI: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        padding: 5,
        borderWidth: 1,
        margin: 10
    },
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
})