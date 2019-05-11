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
        backgroundColor: "#eee",
        color: "#111",
        borderRadius: 8,
        width: 250,
        height: 50,
        marginBottom: 10,
        marginTop: 10
    },
    btn: {
        backgroundColor: '#ff8c00',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 8
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
        fontSize: 16,
    }
});

export default styles;