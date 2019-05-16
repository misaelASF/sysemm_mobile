import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'

class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Recados Importantes</Text>
          <ScrollView style={styles.content}>
              <View style={styles.msg}>
                
              </View>
          </ScrollView>
      </View>
    )
  }
}

export default Notifications;