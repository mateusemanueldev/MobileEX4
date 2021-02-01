 //import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class IMCMsg extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.imc<17) return (<Text style={styles.textBad}>"Muito abaixo do peso"</Text>);
        if(this.props.imc >=17 && this.props.imc <=18.49) return (<Text style={styles.textBad}>"Abaixo do peso"</Text>);
        if(this.props.imc >=18.5 && this.props.imc <=24.99) return (<Text style={styles.textGood}>"Peso normal"</Text>);
        if(this.props.imc >=25 && this.props.imc <=29.99) return (<Text style={styles.textBad}>"Acima do peso"</Text>);
        if(this.props.imc >=30 && this.props.imc <=34.99) return (<Text style={styles.textBad}>"Obesidade I"</Text>);
        if(this.props.imc >=35 && this.props.imc <=29.99) return (<Text style={styles.textBad}>"Obesidade II (severa)" </Text>);
        if(this.props.imc >40) return (<Text style={styles.text}>"Obesidade III (mórbita)"</Text>);
    }
}

// define your styles
const styles = StyleSheet.create({
    textGood: {
        fontSize:20,

        color:'blue',
        margin:10
    },
    textBad: {
        fontSize:20,
        color:'red',
        margin:10
    }
});

//make this component available to the app
export default IMCMsg;
