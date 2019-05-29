import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#111',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 20,
        color: '#ff8c00'
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