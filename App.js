import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImcForm from './src/imc/ImcForm';
import ImcRestult from './src/imc/ImcRestult';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showResult: false,
    imc: '',
    classificacao: '',
    grauObesidade: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <ImcForm showResult={(this.showResult)} />

        {this.state.showResult && (
          <ImcRestult imc="18" classificacao="Magreza" grauObesidade="0" />  
        )}
      </View>
    );
  }

  showResult = result => {
    debugger;
    
    this.setState({
      showResult: true,
      imc: result.imc,
      classificacao: result.classificacao,
      grauObesidade: result.grauObesidade
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  resultDescription: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#333333'
  }
});
