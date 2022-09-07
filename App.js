import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Slider from "@react-native-community/slider";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Nome: '',
      Idade: 0,
      sexo: 0,
      sexos: [
        { key: 0, sexo: 'Selecionar' },
        { key: 1, sexo: 'Masculino' },
        { key: 2, sexo: 'Feminino' },
        { key: 3, sexo: 'Não identificar' }
      ],
      saldoLimite: 0,
      statusEstudante: false,
      Pessoa: [{}]
    };

    this.enviar = this.enviar.bind(this);
  }

  enviar() {
    if (this.state.Nome === null || this.state.Nome.trim() === '') {
      alert('O campo nome, não pode ser vazio!')
      return;
    }
    if (this.state.Idade === 0) {
      alert('O campo idade, não pode ser vazio!')
      return;
    }
    else if (this.state.Idade < 18) {
      alert('Menores de idade, não são permitidos abrir conta.')
      return;
    }
    if (this.state.sexo === 0) {
      alert('Selecione seu sexo.')
      return;
    }

    let pessoa = [{
      Codigo: this.state.Pessoa.length + 1,
      Nome: this.state.Nome,
      Idade: this.state.Idade + ' anos',
      Sexo: this.state.sexos[this.state.sexo].sexo,
      Estudante: this.state.statusEstudante ? 'Estudante' : 'Não estudante',
      Limite: "R$ " + this.state.saldoLimite.toFixed(0) + ",00"
    }]

    this.setState({ Pessoa: pessoa })
  }

  render() {

    let sexoMap = this.state.sexos.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.sexo} />
    })

    return (
      <View style={estilo.container}>
        <TextInput placeholder="Nome" onChangeText={(nome) => this.setState({ Nome: nome })} />
        <TextInput placeholder="Idade" keyboardType="number-pad" onChangeText={(idade) => this.setState({ Idade: idade })} />

        <View>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={(sexoSelecionado) => this.setState({ sexo: sexoSelecionado })}
          >
            {sexoMap}
          </Picker>
        </View>

        <View>
          <Text>Quantos de limite você deseja?</Text>
          <Slider
            minimumValue={100}
            maximumValue={1000}
            onValueChange={(valorSelecionado) => this.setState({ saldoLimite: valorSelecionado })}
            value={this.state.saldoLimite} />
          <Text> R$ {this.state.saldoLimite.toFixed(0)},00</Text>
        </View>

        <View>
          <Switch
            value={this.state.statusEstudante}
            onValueChange={(statusSelecionado) => this.setState({ statusEstudante: statusSelecionado })}
          />
        </View>

        <TouchableOpacity onPress={this.enviar}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        
        <View>
          <Text>Fila de espera: </Text>
          <Text>{this.state.Pessoa[0].Nome}</Text>
          <Text>{this.state.Pessoa[0].Idade}</Text>
          <Text>{this.state.Pessoa[0].Sexo}</Text>
          <Text>{this.state.Pessoa[0].Estudante}</Text>
          <Text>{this.state.Pessoa[0].Limite}</Text>
          <Text>Fila de espera: </Text>
        </View>
      </View>
    )
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },

})