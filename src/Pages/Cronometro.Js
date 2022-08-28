// import { Component } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity
// } from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numero: 0,
//       iniciarPausar: 'INICIAR',
//       ultimoTempo: 'Último tempo: 0'
//     };

//     this.timer = null;

//     this.iniciar = this.iniciar.bind(this);
//     this.resetar = this.resetar.bind(this);
//   }

//   iniciar() {
//     this.setState({ iniciarPausar: 'PAUSAR' })

//     if (this.timer != null) {
//       clearInterval(this.timer);
//       this.timer = null;
//       this.setState({ iniciarPausar: 'INICIAR' })
//     } else {
//       this.timer = setInterval(() => {
//         this.setState({ numero: this.state.numero + 0.1 })
//       }, 100);
//     }

//   }

//   resetar() {
//     if (this.timer != null) {
//       clearInterval(this.timer);
//       this.timer = null;
//       this.setState({ iniciarPausar: 'INICIAR' })
//       this.setState({ numero: 0 })
//     }

//     this.setState({
//       numero: 0,
//       ultimoTempo: 'Último tempo: ' + this.state.numero.toFixed(1)
//     })
//   }

//   render() {
//     return (
//       <View style={estilo.view}>
//         <Image
//           source={require('./src/cronometro.png')}
//           style={estilo.imagem}
//         />
//         <Text style={estilo.cronometro}>{this.state.numero.toFixed(1)}</Text>

//         <View style={estilo.container}>
//           <TouchableOpacity style={{ marginRight: 10 }} onPress={this.iniciar}>
//             <Text style={estilo.botao}>{this.state.iniciarPausar}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ marginLeft: 10 }} onPress={this.resetar}>
//             <Text style={estilo.botao}>LIMPAR</Text>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <Text style={estilo.ultimo}>{this.state.ultimoTempo}</Text>
//         </View>
//       </View>
//     )
//   }
// }

// const estilo = StyleSheet.create({
//   view: {
//     flex: 1,
//     backgroundColor: '#00aeef',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   imagem: {
//     width: 150,
//     height: 170
//   },
//   cronometro: {
//     marginTop: -90,
//     fontSize: 30,
//     color: '#ececec',
//     fontWeight: 'bold'
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 260,
//     paddingTop: 100,
//   },
//   botao: {
//     borderWidth: 1,
//     padding: 15,
//     borderRadius: 5,
//     fontSize: 18,
//     color: '#fff',
//     borderColor: '#fff'
//   },
//   ultimo: {
//     paddingTop: 20,
//     fontSize: 16,
//     color: '#fff'
//   }
// });

// export default App;