import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function TextPI(){
    return(
        <View>
            <Text style={styles.textos}>Bem vindo ao App!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textos:{
        fontSize: 15,
        textAlign: 'center'
    }
})