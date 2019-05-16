import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#ff8c00',
        marginTop: 10,
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    input: {
        backgroundColor: "#ddd",
        color: "#111",
        borderRadius: 8,
        width: '80%',
        margin: 20,
        height: 60,
        padding: 10,
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#ff8c00',
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 8
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
        fontSize: 18,
    },
    return: {
        marginTop: 30,
    },
    returnText: {
        fontWeight: '700',
        fontSize: 23,
        color: 'crimson'
    }
});

export default styles;