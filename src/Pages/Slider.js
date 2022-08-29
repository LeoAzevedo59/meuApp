// import React, { Component } from "react";
// import { Text, View, StyleSheet } from 'react-native';
// import Slider from "@react-native-community/slider";

// export default class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       valor: 0
//     };
//   }

//   render() {
//     return (
//       <View style={estilo.container}>
//         <Slider
//           minimumValue={0}
//           maximumValue={100}
//           onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
//           value={this.state.valor}
//           minimumTrackTintColor={'red'}
//           maximumTrackTintColor={'black'} />
//         <Text style={estilo.valor}>Valor: {this.state.valor.toFixed(0)}</Text>

//       </View>
//     )
//   }
// }

// const estilo = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50
//   },
//   valor: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bolder'
//   }
// })