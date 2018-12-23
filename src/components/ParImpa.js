import React from 'react'
import {View, Text} from 'react-native'
import Default from '../styles/Default'

export default props => 
    <View>
        {
            props.numero % 2 == 0
            ? <Text style={[Default.ex]}>Par</Text>
            : <Text style={[Default.ex]}>Impar</Text>
        }
    </View>