import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btn: {
        width: '90%',
        marginBottom: 20,
        height: 70,
        backgroundColor: '#ff8c00',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.5,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 10,
        color: '#fff'
    },
    btnV: {
        width: 100,
        marginTop: 50,
        marginBottom: 0,
        height: 50,
        backgroundColor: '#bbb',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.5,
    },
    btnTextV: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 5,
        color: '#fff'
    }
});

export default styles;