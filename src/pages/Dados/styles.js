import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    containerDados: {
        padding: 30,
        marginTop: 40,
        backgroundColor: '#ff8c00',
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#111",
        textTransform: 'uppercase',
        flex: 1,
        textAlign: 'center',
        marginBottom: 20,
    },
    data: {
        fontWeight: 'bold',
        color: "#111",
        fontSize: 17
    },
    rg: {
        fontWeight: 'bold',
        color: "#111",
        fontSize: 17
    },
    email: {
        fontWeight: 'bold',
        color: "#111",
        fontSize: 17
    },
    bairro: {
        fontWeight: 'bold',
        color: "#111",
        fontSize: 17
    }
});

export default styles;