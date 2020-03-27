import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.title}>SIMACCE</Text>
        <Text style={styles.paragraph}>
          Sistema Informático Municipal de Asistencia Comunitaria y Contención Epidemiologica
        </Text>
        <Button title="Escanear DNI" onPress={() => this.props.navigation.navigate('Scan')} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  title: {
    fontSize: 48,
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
