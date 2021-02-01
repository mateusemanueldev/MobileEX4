 //import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IMCMsg from './IMCMsg'; 

// create a component
class IMCCalc extends Component {
    render() {
        const { peso, altura } = this.props 

        if(peso == null || altura == null) return null;
        const imc = peso/(altura**2);
        imc.toFixed(2);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Seu IMC é {imc}</Text>
                <Text><IMCMsg imc={imc}/></Text>
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
    
    text: {
        fontSize:20,
        color:'black',
        margin:5
    }
});

//make this component available to the app
export default IMCCalc;
