import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import api from '../../services/api';
import styles from './styles';

class Dados extends Component {
  state = {
    aluno: []
  }

  async componentDidMount() {
    const response = await api.get('/');

    console.log(response);
    this.setState({ aluno: response.data });
  }

  render() {
    // console.log(this.state.aluno)
    return (
      <View style={styles.container}>
         <ScrollView>
         { this.state.aluno.map(aluno => (
          <View key={aluno.id} style={styles.containerDados}>
              <Text style={styles.name}>{aluno.nome}</Text>
              <Text style={styles.data}>Dt_nascimento: {aluno.data_de_nascimento}</Text>
              <Text style={styles.rg}>RG: {aluno.rg}</Text>
              {/* <Text style={styles.email}>E-mail: {aluno.email}</Text>
              <Text style={styles.bairro}>Bairro: {aluno.bairro}</Text> */}
          </View>
        )) }
        </ScrollView>
      </View>
    )
  }
}

export default Dados;