import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default class DecodedData extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    const userData = route.params;

    if( userData.type != 2048 ) {
      return (
        <View style={styles.container}>

          <Text style={styles.title}>Error</Text>
          <Text style={styles.paragraph}>El codigo leido no es un DNI...</Text>
        </View>
      )
    }

    // 0: Nro. tramite
    // 1: Apellidos
    // 2: Nombres
    // 3: Sexo
    // 4: DNI
    // 5: Ejemplar
    // 6: Fecha de nacimiento
    // 7: Fecha emision
    // 8: Numero X
    const data = userData.data.split('@');

    return (
      <View style={styles.container}>

        <Text style={styles.title}>{data[4]}</Text>
        <Text style={styles.paragraph}>{data[1]}, {data[2]}</Text>
        <Text>Sexo: {data[3]}</Text>
        <Text>Ejemplar: {data[5]}</Text>
        <Text>Fecha de Nacimiento: {data[6]}</Text>
        <Text>Fecha de Emision: {data[7]}</Text>
        <Text>Nro. de Tramite: {data[0]}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  title: {
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
