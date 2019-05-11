import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff8c00',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btn: {
        width: '90%',
        margin: 10,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'stretch',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.5,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
        color: '#ff8c00'
    }
});

export default styles;