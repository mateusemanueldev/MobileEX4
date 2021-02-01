//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';

// create a component
class Perfil extends Component {
    render() {
        let foto = {
            uri: 'https://scontent.ffor1-2.fna.fbcdn.net/v/t1.0-9/36514078_1975206796123229_502619346678317056_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=k-EPXLntRGgAX_ibtse&_nc_ht=scontent.ffor1-2.fna&oh=7b401f5f2513a1e6de2f4a48d97fe28f&oe=603CB053'
            };
            return (
            <View style={styles.container}>
                <Text style={styles.titulo}>MEU PERFIL</Text>
                <Image source={foto} style={styles.img}/>
                <Text style={styles.textname}>Mateus Emanuel</Text>
                <Text style={styles.textcurso}>Design Digital</Text>
                <Text style={styles.textidade}>20 anos</Text>
                <View style={styles.botao}><Button title="INICIO"></Button></View>
            </View>
            );
            };
}

// define your styles
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize:25,
        margin:10,
        fontWeight:'bold',
        color:'#44A0E6'
    },
    img: {
        width:200,
        height:200,
        borderRadius:100,
        margin: 10,
        backgroundColor:'#fff',
        borderColor:'#44A0E6',
        borderWidth:6
    },
    textname:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:21,
        color:'#44A0E6',
    },
    textcurso:{
        textAlign:'center',
        fontSize:19,
        color:'#44A0E6',
    },
    textidade:{
        textAlign:'center',
        fontSize:16,
        color:'#44A0E6',
    },
    botao: {
        marginTop:30,
        padding:0,
        width:250,
    }
});

//make this component available to the app
export default Perfil;
