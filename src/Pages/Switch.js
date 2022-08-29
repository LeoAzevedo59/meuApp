// import React, { Component } from "react";
// import { Text, View, StyleSheet, Switch } from 'react-native';


// export default class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       estado: false
//     };
//   }

//   render() {
//     return (
//       <View style={estilo.container}>
//         <Switch
//           value={this.state.estado}
//           onValueChange={(estadoSelecionado) => this.setState({ estado: estadoSelecionado })}
//           thumbColor={'black'}/>

//         <Text style={this.state.estado ? estilo.ligado : estilo.desligado}>Status: {this.state.estado ? 'Ligado' : 'Desligado'}</Text>
//       </View>

//     )
//   }
// }

// const estilo = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50
//   },
//   ligado: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'green'
//   },
//   desligado: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'red'
//   }

// })