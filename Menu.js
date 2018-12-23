import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from "react-navigation";

import Simples from './src/components/Simples'
import ParImpar from './src/components/ParImpa'
import Inverter, { MegaSena } from './src/components/Mult'
import Contador from './src/components/Contador'
import Plataformas from './src/components/Plataformas'
import ValidarProps from './src/components/ValidarProps'
import Evento from './src/components/Evento'
import ComunicacaoDireta from './src/components/ComunicacaoDireta'
import TextoSincronizado from './src/components/ComunicacaoIndireta'
import ListaFlex from './src/components/ListaFlex'
import Flex from './src/components/Flex'

class HomeScreen extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const Menu = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Evento: {
        screen: Evento
    },
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex' }
    },
    ComunicacaoDireta: {
        screen: () => <ComunicacaoDireta nome="Tião" sobrenome="Galinha"></ComunicacaoDireta>,
        navigationOptions: { title: 'Comunicação Direta' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Contador: {
        screen: Contador
    },
    Plataformas: {
        screen: Plataformas
    },
    MegaSena: {
        screen: MegaSena,
        navigationOptions: { title: 'Mega Sena' }
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={13}></ValidarProps>,
        navigationOptions: { title: 'Validar Props' }
    },
    Inverter: {
        screen: () => <Inverter texto="Vasco da Gama!"></Inverter>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}></ParImpar>,
        navigationOptions: { title: "Par ou Impar" }
    },
    Simples: {
        screen: () => <Simples texto="Texto Simples"></Simples>
    }
}, {
        drawerWidth: 300
    });

/* const AppContainer = createAppContainer(AppNavigator); */

export default Menu;