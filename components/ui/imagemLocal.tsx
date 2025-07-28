import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';
import senacImagem from '../../assets/images/VitharLeo.jpeg';
import userImage from '../../assets/images/user.png';

// export default function imagemLocal(){
//     return(
//         <view style={styles.container}>

//             <Image
//             source={senacImagem} 
//             style={styles.imagem}>
//              </Image>
//         <Text style={styles.legenda}>Vithar Leonarda</Text>

//         </view>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         alignItems: 'center'
//     },
//     imagem: {
//         width: 80,
//         height: 80,
//         marginBottom: 10
//     },
//     legenda: {
//         width: 80,
//         height: 80,
//         marginBottom: 10 
//     }
// })


export default function userPic(){
    return(
        <View style={styles.container}>
            <Image 
            source={userImage}
            style={styles.imagem}></Image>
            <Text style={styles.legenda}>Usuario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        marginBottom: 10
    },
    imagem: {
        width: 190,
        height: 190,
    },
    legenda: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 16,
        borderRadius: 5,
        padding: 3
    }
})