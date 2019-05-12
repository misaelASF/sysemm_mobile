import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
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
        <Image source={require("../../imgs/logo.png")} 
        style={{margin: 15, width: 400, height: 200,}} />
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
        onPress={() => this.props.navigation.navigate("Menu")}
        >
           <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login;