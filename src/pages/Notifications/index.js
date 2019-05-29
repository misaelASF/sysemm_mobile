import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'

class Notifications extends Component {
  state = {
     notifications: [
       {id: 1, name: 'Misael Augusto', cargo: 'Coordenador', msg: 'No proximo sabádo ocorrerá uma festa.', tipo: 'geral'},
       {id: 2, name: 'Allisson Filipe', cargo: 'Professor', msg: 'Olá responsavel seu filho sofreu um pequeno acidente na escola', tipo: 'individual'},
       {id: 3, name: 'Tairine Mousinho', cargo: 'Professor', msg: 'Seu filho é um dos melhores alunos da sala.', tipo: 'individual'},
       {id: 4, name: 'Eucimar Pedro', cargo: 'Coordenador', msg: 'Apartir da proxima segunda-feira, as aulas começaram mais cedo.', tipo: 'geral'},
       {id: 5, name: 'José Anderson', cargo: 'Coordenador', msg: 'Responsável seu filho brigou na escola hoje.', tipo: 'individual'}
     ]
  }
  render() {
    const { notifications } = this.state;
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Recados Importantes</Text>
          <ScrollView style={styles.content}>
            <View style={styles.containerFluid}>

              { notifications.map(not => (
                <View key={not.id} style={styles.containerNot}>
                   <Text style={styles.nomeNot}>Nome do Emissor: {not.name}</Text>
                   <Text style={styles.cargoNot}><Text style={styles.negrito}>Cargo do Emissor:</Text> {not.cargo}</Text>
                   <Text style={styles.msgNot}><Text style={styles.negrito}>Mensagem:</Text> {not.msg}</Text>
                   <Text style={styles.tipoNot}><Text style={styles.negrito}>Tipo:</Text> {not.tipo}</Text>
                </View>
              )) }

            </View>
          </ScrollView>
      </View>
    )
  }
}

export default Notifications;