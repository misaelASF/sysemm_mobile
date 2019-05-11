import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../imgs/logo.png')} />
        <Text style={styles.title}>Bem Vindo!</Text>
        <TouchableOpacity 
        style={styles.btn}
        onPress={() => this.props.navigation.navigate("Menu")}
        >
            <Text style={styles.btnText}>Você já tem conta</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Welcome;
