import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function ImagemTDS(){
    return(
        <View style={styles.container}>
        {
        //exibe uma imagem pelo URL
        }
        <Image source={{ uri: 'https://portalunico.com/wp-content/uploads/2024/11/7812ef0d-90e4-4886-b2e7-b92f54d6b344-e1730909899851.jpeg'}}   
         style={styles.imagem}/>
         {
         //Legenda da imagem
         }
         <Text style={styles.legenda}>Hamster</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    legenda: {
       fontSize: 16,
       color: '#555',
    },
    imagem: {
        width: 80,
        height: 80,
        marginBottom: 10
    }
})