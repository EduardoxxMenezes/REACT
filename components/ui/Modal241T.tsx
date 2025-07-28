import React, {useState} from "react";
import {Modal, View, Button, Text} from 'react-native';

//QUANDO USAR MODAL: apresentar informações, confirmações, formularios, etc.
export default function ModalTDS(){
    const[visible, setVisible] = useState(false);
    //controla se o modal é verdadeiro ou falso, no caso, ele começa como falso.

    return(
        <View style={{margin: 10}}>

            <Button title="Abrir Modal" onPress={() => setVisible(true)}/>

            {/*Modal que aparece com fundo transparentre e faz a animação de deslizar */}
            <Modal visible={visible} transparent animationType="slide">
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10}}></View>
                  {/* Caixa branca com cantos arredondados */}

                    <Text style={{ marginBottom: 10}}> Este é um modal!!</Text>
                    <Button title="Fechar Modal" onPress={() => setVisible(false)}></Button>
                </View> 

            </Modal>

          
        </View>
    )
}