import React from "react";
import {ScrollView, Text, StyleSheet} from 'react-native';

export default function ScrollPI(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.texts}>1. Tela de Login e cadastro.</Text>
            <Text style={styles.texts}>2. Documentação</Text>
            <Text style={styles.texts}>3. Banco de dados</Text>
            <Text style={styles.texts}>4. Fluxograma</Text>
            <Text style={styles.texts}>5. Controllers e routs (backend)</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor:'black',
        padding: 2,
        borderWidth: 1,
        margin: 10
        },
    texts: {
        margin: 5,
        
    }
})