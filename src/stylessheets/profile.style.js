import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    logoContainer: {
        backgroundColor: '#524f47',
    },

    logoImage: {
        height: 80,
        width: 80,
    },

    headerContainer: {
        backgroundColor: '#524f47',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingBottom: 10,
        alignItems: 'center',
    },

    headerImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 10,
        justifyContent: 'center',
    },

    headerTXT: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },

    headerTXTDesc: {
        color: 'black',
        textAlign: 'center',
    },

    bodyContainer: {
        padding: 20,
        backgroundColor: 'white',
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    button:{
        color: 'white',
        alignItems: 'center',
    },

    buttonIcon: {
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: 'red',
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'black',
    },

    bodyTXT: {
        color: '#efd',
        fontSize: 20,
    },
});