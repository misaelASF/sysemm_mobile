import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'

class Notifications extends Component {
  state = {
     user: [
       {id: 1,name: 'Misael', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 2,name: 'Allisson', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 3,name: 'Eucimar', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 4,name: 'Tairine', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 5,name: 'Andersn', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 6,name: 'Andersn', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 7,name: 'Andersn', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 8,name: 'Andersn', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
       {id: 9,name: 'Andersn', msg: 'Lorem Ipsum is simply bnlhdhisdjssd sodjosjdjosdj sjdosdjsdosd sdjojsdjosjod'},
     ]
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Notificações</Text>
          <ScrollView style={styles.content}>
              <View style={styles.msg}>
                { this.state.user.map(user => (
                 <View key={user.id} style={styles.msgContent}>
                      <Text style={styles.msgTitle}>{user.name}</Text>
                      <Text style={styles.msgDescription}>{user.msg}</Text>
                 </View>
                ))}
              </View>
          </ScrollView>
      </View>
    )
  }
}

export default Notifications;