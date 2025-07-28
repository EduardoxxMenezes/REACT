import React from "react";
import {View, Button, StyleSheet, Alert} from 'react-native';

// export default function ButtonTDS(){
//     //função executada quando o botão for pressionado
//     const onClick = () => {
//         Alert.alert('BOTÃO PRESSIONADO');
//     }
//     return(
//         <View style={styles.container}>
//         <Button title="Clique aqui" onPress={onClick} color={"#28a745"}></Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 20
//     }
// })

export default function button(){
    return(
        <View>
            <Button title="SUCESSO" color={'blue'} ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#0000FF',
    }
})