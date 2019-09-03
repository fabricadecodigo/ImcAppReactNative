import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class ImcForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    peso: '',
    altura: ''
  };

  render() {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="Altura (ex.: 1,70)"
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
        />

        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="Peso (ex.: 75)"
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
        />

        <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onSubmit = () => {
    if (!this.state.peso || !this.state.altura) return;

    let peso = 0;
    if (this.state.peso) {
      peso = parseFloat(this.state.peso);
    }

    let altura = 0;
    if (this.state.altura) altura = parseFloat(this.state.altura);

    const imc = peso / (altura * altura);
    const classificacao = this.getClassificacao(imc);
    const grauObesidade = this.getGrauObesidade(imc);

    this.props.showResult({
      imc: imc.toFixed(2),
      classificacao: classificacao,
      grauObesidade: grauObesidade
    });
  };

  getClassificacao = imc => {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade grave';
    }
  };

  getGrauObesidade = imc => {
    if (imc < 18.5) {
      return '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return '0';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'I';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'II';
    } else {
      return 'III';
    }
  };
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30
  },
  input: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#ffffff',
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#212529'
  },
  button: {
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontSize: 16,
    fontWeight: '400',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  buttonText: {
    color: '#FFF'
  }
});
