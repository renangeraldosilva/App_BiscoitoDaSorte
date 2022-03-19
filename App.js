import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbivio, pense no improvável e conquiste o impossivel.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png'),
    }); 
  }

  render(){
    return(
      <View style={ styles.container}>
        
        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={ styles.estiloBotao} onPress={this.quebraBiscoito}>
          <View style={ styles.btnArea}>
            <Text style={ styles.btnTexto}>Quebrar Biscoito</Text>
            
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    img:{
      height: 250,
      width: 250,
    },
    textoFrase:{
      textAlign:'center',
      fontSize: 20,
      color:'#DD7B22',
      margin:30,
      fontStyle:'italic',
    },
    btnArea:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    estiloBotao:{
      width:230,
      height: 50,
      borderWidth:2,
      borderColor:'#DD7B22',
      borderRadius:25,
    },
    btnTexto:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#DD7B22',
    }
});

export default App;