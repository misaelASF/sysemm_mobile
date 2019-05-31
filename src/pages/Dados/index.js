import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import api from '../../services/api';
import styles from './styles';

class Dados extends Component {
  state = {
    aluno: [
      {
        id: 1,
        name: 'José Anderson',
        data_de_nascimento: '12-05-2007',
        rg: 875.634,
        sexo: 'Masculino',
        cpf: '897.265.954-21',
        turma: '8° ano',
        turno: 'tarde',
        mae: 'Ana Margarida',
        pai: 'João Paulo'
      }
    ]
  }

  // async componentDidMount() {
  //   const response = await api.get('/1');

  //   console.log(response);
  //   this.setState({ aluno: response.data });
  // }

  render() {
    // console.log(this.state.aluno)
    return (
      <View style={styles.container}>
         <ScrollView>
         { this.state.aluno.map(aluno => (
          <View key={aluno.id} style={styles.containerDados}>
              <Text style={styles.name}>{aluno.name}</Text>
              <Text style={styles.data}>Dt_nascimento: {aluno.data_de_nascimento}</Text>
              <Text style={styles.rg}>RG: {aluno.rg}</Text>
              <Text style={styles.email}>Sexo: {aluno.sexo}</Text>
              <Text style={styles.bairro}>CPF: {aluno.cpf}</Text>
              <Text style={styles.bairro}>Turma: {aluno.turma}</Text>
              <Text style={styles.bairro}>Turno: {aluno.turno}</Text>
              <Text style={styles.bairro}>Mãe: {aluno.mae}</Text>
              <Text style={styles.bairro}>Pai: {aluno.pai}</Text>
          </View>
        )) }
        </ScrollView>
      </View>
    )
  }
}

export default Dados;