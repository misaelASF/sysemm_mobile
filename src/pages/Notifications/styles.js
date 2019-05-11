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
        margin: 10
    },
    msg: {
        margin: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    msgTitle: {
        color: '#eee',
        fontSize: 19,
        fontFamily: 'Arial',
        textAlign: 'justify',
        padding: 10,
        fontWeight: 'bold'
    },
    msgDescription: {
        color: '#eee',
        fontSize: 19,
        fontFamily: 'Arial',
        textAlign: 'justify',
        padding: 10
    },
    msgContent: {
        marginBottom: 20,
        backgroundColor: "#999",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        width: '100%'
    }

});

export default styles;