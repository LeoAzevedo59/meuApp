import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './src/Components/Pessoa';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fede: [
        { codigo: 1, nome: 'Matheus', idade: 50, email: 'matheus@email.com' },
        { codigo: 2, nome: 'Fernanda', idade: 20, email: 'fernando@email.com' },
        { codigo: 3, nome: 'Thiago', idade: 30, email: 'thiago@email.com' },
        { codigo: 4, nome: 'Beatriz', idade: 60, email: 'beatriz@email.com' },
        { codigo: 5, nome: 'Jorge', idade: 50, email: 'beatriz@email.com' },
        { codigo: 6, nome: 'Pedro', idade: 40, email: 'beatriz@email.com' },
        { codigo: 7, nome: 'Roberta', idade: 30, email: 'beatriz@email.com' },
        { codigo: 8, nome: 'Willian', idade: 20, email: 'beatriz@email.com' },
        { codigo: 9, nome: 'Ana', idade: 10, email: 'beatriz@email.com' }

      ]
    }
  }

  render() {
    return (
      <View style={estilo.container}>
        <FlatList
          data={this.state.fede}
          keyExtractor={(item) => item.codigo}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;


