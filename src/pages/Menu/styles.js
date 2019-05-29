import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 100
    },
    btn: {
        width: 120,
        marginBottom: 20,
        height: 120,
        backgroundColor: '#ff8c00',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginLeft: 20,
        borderColor: '#ccc'
    },
    img: {
        width: 70,
        height: 70,
        padding: 10
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