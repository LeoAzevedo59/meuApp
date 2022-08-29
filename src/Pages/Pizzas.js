// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// export default class App extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       pizza: 0,
//       pizzas: [
//         { key: 0, nome: '- - -', valor: 0.0 },
//         { key: 1, nome: 'Calabresa', valor: 30.90 },
//         { key: 2, nome: 'Frango', valor: 35.90 },
//         { key: 3, nome: 'Portugues', valor: 37.90 },
//         { key: 4, nome: 'Peperoni', valor: 38.90 },
//         { key: 5, nome: 'Quatro queijo', valor: 42.90 },


//       ]
//     }
//   }

//   render() {

//     let pizzasItem = this.state.pizzas.map((value, key) => {
//       return <Picker.Item key={key} value={key} label={value.nome} />
//     })

//     return (
//       <View style={estilo.container}>
//         <Text style={estilo.logo}>Menu Pizza</Text>

//         <Picker
//           selectedValue={this.state.pizza}
//           onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
//         >
//           {pizzasItem}

//         </Picker>

//         <Text style={estilo.pizza}>Você escolheu: pizza de {this.state.pizzas[this.state.pizza].nome}</Text>
//         <Text style={estilo.pizza}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
//       </View>
//     )
//   }
// }

// const estilo = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50
//   },
//   logo: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   pizza: {
//     fontSize: 20,
//     textAlign: 'center'
//   }
// })