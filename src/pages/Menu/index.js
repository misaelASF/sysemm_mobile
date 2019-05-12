import React,{ Component } from 'react';
import {Text, View, TouchableOpacity, StatusBar } from 'react-native';

import styles from './styles';

class Menu extends Component {
        render() {
        return (
            <>
            <View style={styles.container}>
                 <TouchableOpacity 
                 style={styles.btn}
                 onPress={() => this.props.navigation.navigate("Dados")}
                 >
                     <Text style={styles.btnText}>Boletim</Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                 style={styles.btn}
                 onPress={() => this.props.navigation.navigate("Notifications")}
                 >
                     <Text style={styles.btnText}>Notificações</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.btn}>
                     <Text style={styles.btnText}>Colégio</Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                 style={styles.btnV}
                 onPress={() => this.props.navigation.goBack()}>
                     <Text style={styles.btnTextV}>Voltar</Text>
                 </TouchableOpacity>
            </View>
            </>
        );
    }
}

export default Menu;