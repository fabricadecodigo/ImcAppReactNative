import React, { Component } from "react";
import {
  StyleSheet,  
  View,
} from "react-native";

import ImcResult from "./src/imc/ImcResult";
import ImcForm from "./src/imc/ImcForm";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showResult: false,
    imc: "",
    classificacao: "",
    grauObesidade: ""
  };  

  render() {
    return (
      <View style={styles.container}>
        <ImcForm showResult={this.showResult} />
        
        {/* condicional para exibir ou não a parte abaixo */}
        {this.state.showResult && (
          <ImcResult imc={this.state.imc} classificacao={this.state.classificacao} grauObesidade={this.state.grauObesidade} />
        )}
        
      </View>
    );
  }  

  showResult = (result) => {
    this.setState({
      showResult: true,
      imc: result.imc,
      classificacao: result.classificacao,
      grauObesidade: result.grauObesidade
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});
