import React,{ Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from './styles'

export default class Boletim extends Component {
    state = {
        materias: [
            {id: 1, name: 'Matemática', nota1: '8.0', nota2: '7.0', media: '7.5', unidade: '1'},
            {id: 2, name: 'Português', nota1: '7.0', nota2: '7.0', media: '7.0', unidade: '1'},
            {id: 3, name: 'História', nota1: '6.0', nota2: '6.0', media: '6.0', unidade: '1'},
            {id: 4, name: 'Ciências', nota1: '9.0', nota2: '10.0', media: '9.5', unidade: '1'}
        ]
    }
    render() {
        const { materias } = this.state;
        return(
            <>
              <View style={styles.container}>
                   <Text style={styles.title}>Aluno: José Anderson</Text>
                      <ScrollView>
                       { materias.map(item => (
                           <View style={styles.boletim} key={item.id}>
                              <Text style={styles.materia}>Materia: {item.name}</Text>
                              <View style={styles.notas}>
                                   <Text style={styles.nota}>Nota Teste: {item.nota1}</Text>
                                   <Text style={styles.nota}>Nota Prova: {item.nota2}</Text>
                                   <Text style={styles.nota}>Media Final: {item.media}</Text>
                              </View>
                              <Text style={styles.unidade}>Unidade: {item.unidade}</Text>
                           </View>
                       )) }
                     </ScrollView>
              </View>
            </>
        )
    }
}
