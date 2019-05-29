import React,{ Component } from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from './styles';

class Menu extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.container}>
                 <TouchableOpacity 
                 style={styles.btn}
                 onPress={() => this.props.navigation.navigate("Dados")}
                 >
                     <Image style={styles.img} source={require('../../imgs/escola.png')} />
                 </TouchableOpacity>
                 <TouchableOpacity 
                 style={styles.btn}
                 onPress={() => this.props.navigation.navigate("Notifications")}
                 >
                     <Image style={styles.img} source={require('../../imgs/not.png')} />
                 </TouchableOpacity>
                 <TouchableOpacity 
                 style={styles.btn}
                 onPress={() => this.props.navigation.navigate("Boletim")}
                 >
                     <Image style={styles.img} source={require('../../imgs/boletim.png')} />
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.btn}>
                     <Image style={styles.img} source={require('../../imgs/msg.png')} />
                 </TouchableOpacity>
            </View>
            </>
        );
    }
}

export default Menu;