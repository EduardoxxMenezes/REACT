import React from "react";
import {View, StyleSheet, Modal} from 'react-native'
// importamos o componente criado
import Titulo from "@/components/Titulo";
import Imagem from "@/components/ui/imagem";
import ImagemTDS from "@/components/ui/imagem";
import ImagemLocal from "@/components/ui/imagemLocal";
import ScrollViewTDS from "@/components/ui/scrollview";
import ButtonTDS from "@/components/ui/button";
import { ScrollView } from "react-native-gesture-handler";
import TextPI from "@/components/ui/text2";
import ScrollPI from "@/components/ui/scrollview2";
import TextImputPI from "@/components/ui/textInput2";
import ModalTDS from "@/components/ui/Modal241T";

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      {/* <Titulo />
      <ImagemTDS/>
     <ImagemLocal/>
      <ScrollViewTDS/>
  <ButtonTDS/> */}

    {/* <ImagemLocal/>
    <Titulo/>
    <ScrollViewTDS/>
    <ButtonTDS/> */}
    <TextPI/>
    <ImagemTDS/>
    <TextImputPI/>
    <ScrollPI/>
    <ButtonTDS/>
    <ModalTDS/>
    </View> 

  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3EB489',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})
