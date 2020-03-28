import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import Bio from './Bio';

export default class ProfileData extends React.Component {

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
      <View style={styles.profile}>

        <Bio style={styles.bio} data={data} />

        <View style={styles.actions}>
          <Ionicons name="ios-hand" size={40} />
          <Ionicons name="ios-flame" size={40} />
          <Ionicons name="ios-medkit" size={40} />
          <Ionicons name="md-cart" size={40} />
        </View>

        <View style={styles.timeline}>
          <Text>Registro de actividades</Text>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({

  profile: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1'
  },

  bio: {
  },

  actions: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'center'
  },

  timeline: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
