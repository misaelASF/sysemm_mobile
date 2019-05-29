import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#ff8c00',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    content: {
        margin: 10,
    },
    containerFluid: {
        alignItems: 'center',
    },
    containerNot: {
        backgroundColor: '#ff8c00',
        padding: 10,
        marginBottom: 10,
        width: '90%',
    },
    nomeNot: {
        fontWeight: 'bold',
        fontSize: 13,
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: 8,
    },
    msgNot: {
        textAlign: 'justify',
        fontSize: 14,
        marginBottom: 8,
    },
    cargoNot: {
        textAlign: 'justify',
        fontSize: 14,
        marginBottom: 8,
    },
    tipoNot: {
        textAlign: 'justify',
        fontSize: 14,
        marginBottom: 8,
    },
    negrito: {
        fontWeight: 'bold',
        color: '#111'
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