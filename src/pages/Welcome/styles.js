import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: 300,
        margin: 10,
        height: 200,
        marginTop: 0,
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
    btn: {
        backgroundColor: '#ff8c00',
        width: 300,
        height: 60,
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