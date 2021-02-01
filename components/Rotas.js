//import liraries
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import IMC from './IMC';
import Perfil from './Perfil';
import Cadastro from './Cadastro';

const MainStack = createStackNavigator({
    Home: Home,
    IMC: IMC,
    Perfil: Perfil,
    Cadastro: Cadastro,
},
    {
        initialRouteName: 'Home'
    }

)
const RootStack = createStackNavigator(
    {
        Main: MainStack,
        MyModal: Modal,
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)
const Routes =
    createAppContainer(RootStack);

export default Rotas;
