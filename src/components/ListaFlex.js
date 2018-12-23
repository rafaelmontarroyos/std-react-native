import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: "João", nota: 7.9 },
    { id: 2, nome: "Ana", nota: 4.5 },
    { id: 3, nome: "Bia", nota: 8.8 },
    { id: 4, nome: "Claudia", nota: 5.9 },
    { id: 5, nome: "Roberto", nota: 9.9 },
    { id: 6, nome: "Rafael", nota: 8.9 },
    { id: 7, nome: "Arthur", nota: 7.2 },
    { id: 8, nome: "Sophia", nota: 7.9 },
    { id: 9, nome: "Dani", nota: 6.0 },

    { id: 11, nome: "João", nota: 7.9 },
    { id: 12, nome: "Ana", nota: 4.5 },
    { id: 13, nome: "Bia", nota: 8.8 },
    { id: 14, nome: "Claudia", nota: 5.9 },
    { id: 15, nome: "Roberto", nota: 9.9 },
    { id: 16, nome: "Rafael", nota: 8.9 },
    { id: 17, nome: "Arthur", nota: 7.2 },
    { id: 18, nome: "Sophia", nota: 7.9 },
    { id: 19, nome: "Dani", nota: 6.0 },
]


const itemEstilo = {
    paddingHorizontal: 15,
    heigth: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList
                data={alunos}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </ScrollView>
    )
}