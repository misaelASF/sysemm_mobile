import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btn: {
        width: '80%',
        marginBottom: 20,
        height: 60,
        backgroundColor: '#ff8c00',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.5,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
        color: '#fff',
        fontFamily: 'sans-serif'
    },
    btnV: {
        width: 100,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 0,
        padding: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0,
    },
    btnTextV: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 5,
        color: '#333'
    }
});

export default styles;