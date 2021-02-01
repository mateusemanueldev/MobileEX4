//import liraries
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableHighlight } from 'react-native';
import IMCCalc from './IMCCalc';

// create a component
class IMC extends Component {
    constructor(props){
        super(props);
        this.state = {peso:null, altura:null, pesoFinal:null, alturaFinal:null}
    }
    CalculoFinal= ()=>{
        this.setState({
            pesoFinal:this.state.peso,
            alturaFinal:this.state.altura
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Peso' onChangeText={(meuPeso)=>{this.setState({peso:meuPeso})}}/>
                <TextInput style={styles.input} placeholder='Altura' onChangeText={(minhaAltura)=>{this.setState({altura:minhaAltura})}}/>
                <View style={styles.viewButton}>
                    <Button title="Calcular" onPress={()=>{this.CalculoFinal()}}/>
                </View>
                <IMCCalc altura={this.state.alturaFinal} peso={this.state.pesoFinal}></IMCCalc>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height:45,
        width:300,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        color:'black',
        fontSize:16, 
        padding:15,
        marginBottom:16
        
    },
    viewButton:{
        width:300,
        padding:5,
        alignItems:'center',
        borderRadius:5
    },
    text: {
        fontSize:20,
        color:'black',
        margin:5
    }
});

//make this component available to the app
export default IMC;
