//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,  Button} from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>BEM-VINDO</Text>
                <View style={styles.botao}><Button title="Cadastro" onPress={() => this.props.navigation.goBack()}></Button></View>
                <View style={styles.botao}><Button title="IMC" onPress={() => this.props.navigation.navigate('IMC')}></Button></View>
                <View style={styles.botao}><Button title="Sobre" onPress={() => this.props.navigation.navigate('Sobre')}></Button></View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize:25,
        margin:10,
        fontWeight:'bold',
        color:'#44A0E6'
    },
    botao: {
        margin:10,
        padding:0,
        width:250,
    }
});

//make this component available to the app
export default Home;
