import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    containerDados: {
        backgroundColor: "#ff8c00",
        padding: 20,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#111",
        textTransform: 'uppercase',
    },
    data: {
        fontWeight: 'bold',
        color: "#111"
    },
    rg: {
        fontWeight: 'bold',
        color: "#111"
    },
    email: {
        fontWeight: 'bold',
        color: "#111"
    },
    bairro: {
        fontWeight: 'bold',
        color: "#111"
    }
});

export default styles;