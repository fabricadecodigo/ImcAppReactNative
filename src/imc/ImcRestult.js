import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ImcRestult extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>IMC: {this.props.imc}</Text>
        <Text style={styles.description}>
          Classificação: {this.props.classificacao}
        </Text>
        <Text style={styles.description}>
          Grau de obesidade: {this.props.grauObesidade}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#333333'
  }
});
