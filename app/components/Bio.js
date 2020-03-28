import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Avatar from './Avatar';

export default class Bio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { data } = this.props;

    return (
      <View style={styles.bio}>

        <View style={styles.row1}>
          <Avatar initials={data[3]} size={78} backgroundColor='white' />

          <View style={styles.names}>
            <Text style={styles.surName}>{data[1]}</Text>
            <Text style={styles.firstName}>{data[2]}</Text>
          </View>
        </View>

        <View style={styles.row2}>
            <Text style={styles.dni}>{data[5]} - {data[4]}</Text>
        </View>

      </View>
    )
  }

}


const styles = StyleSheet.create({

  bio: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'limegreen'
  },

  row1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },

  names: {
    paddingLeft: 10,
  },

  surName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32
  },

  firstName: {
    color: 'white',
    fontWeight: 'bold'
  },

  row2: {
    borderTopColor: 'white',
    borderTopWidth: 2,
  },

  dni: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center'
  }

});
