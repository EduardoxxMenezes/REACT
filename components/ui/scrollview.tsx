import React from "react";
import {ScrollView, Text, StyleSheet, TextInput} from 'react-native';


// export default function ScrollViewTDS(){
//     return(
//         <ScrollView>
//             <Text>Item 1</Text>
//             <Text>Item 2</Text>
//             <Text>Item 3</Text>
//             <Text>Item 4</Text>
//             <Text>Item 5</Text>
//             <Text>Item 6</Text>
//         </ScrollView>
//     )
// }

export default function login(){
    return(
       
        <ScrollView>
            <TextInput placeholder="Nome" style={styles.login}></TextInput>
            <TextInput placeholder="Área de pesquisa" style={styles.login}></TextInput>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
    
    },

    login: {
        backgroundColor: 'white',
        color: '#808080',
        width: 300,
        margin: 20,
        borderRadius: 12,
        height: 30,
        textAlignVertical: 'center',
        padding: 5
        
    }
})