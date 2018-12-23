import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Default from '../styles/Default'

export default class Evento extends Component{

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render(){
        return (
            <View>
                <Text style={Default.font40}>{this.state.texto}</Text>
                <TextInput 
                    style={Default.input} 
                    value={this.state.texto}
                    onChangeText={this.alterarTexto}
                ></TextInput>
            </View>
        )
    }

}