import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize:30 } }

function filhosComProps(props) {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosComProps(props)}
    </View>

export const Avo = props => 
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text> 
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome="Ana"></Filho>
            <Filho nome="Gui"></Filho>
            <Filho nome="Davi"></Filho>
        </Pai>

        <Pai nome='Pedro' sobrenome={props.sobrenome}>
            <Filho nome="Rebeca"></Filho>
            <Filho nome="Renato"></Filho>
        </Pai>
    </View>

export default Avo