import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null
    };
  }

  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  goToDetailsComponent(scan) {
    this.props.navigation.navigate('Details', scan);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Solicitando permisos para la Camara</Text>;
    }

    if (hasCameraPermission === false) {
      return <Text>No posee permisos para la Camara</Text>;
    }

    return (
      <View style={{ flex: 1 }}>

        <BarCodeScanner
          onBarCodeScanned={(scan) => this.goToDetailsComponent(scan)}
          style={StyleSheet.absoluteFill}
        >

          <View style={styles.layerTop} />

          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </View>

          <View style={styles.layerBottom} />

        </BarCodeScanner>

      </View>
    );
  }
}

const opacity = 'rgba(0, 0, 0, .6)';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    layerTop: {
        flex: 2,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity
    },
});
