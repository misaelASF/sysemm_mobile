import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    boletim: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#000'
    },
    materia: {
        backgroundColor: '#ff8c00',
        color: '#fff',
        flex: 1,
        width: '100%',
        padding: 5,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    notas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20, 
    },
    nota: {
        flexDirection: 'column',
    },
    unidade: {
        backgroundColor: '#ff8c00',
        color: '#fff',
        flex: 1,
        width: '100%',
        padding: 5,
        fontWeight: 'bold',
    }
});

export default styles;