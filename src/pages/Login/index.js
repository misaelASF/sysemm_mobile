import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Picker } from 'react-native'
import styles from './styles';

class Login extends Component {
  state={
     login: '',
     senha: '',
     error: '',
  }

  handleSubmit = e => {
     console.log(this.state)
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite seu login"
        value={this.state.login}
        onChangeText={text => this.setState({ login: text })}
         />
        <TextInput 
        style={styles.input} 
        placeholder="Digite sua senha"
        value={this.state.senha}
        onChangeText={text => this.setState({ senha: text })}
        />
        <TouchableOpacity 
        style={styles.btn}
        onPress={this.handleSubmit}
        >
           <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login;