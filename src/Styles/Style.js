import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    centerImg: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
        flex: 1
    },
    centerObj: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    titleStyle: {
        fontWeight: '800',
        fontSize: 20,
        marginVertical: 15,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15,
    },
    touchableOpacity: {
        height: 50,
        width: '50%',
        backgroundColor: 'lightslategrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: '25%'
    },
    button: {
        backgroundColor: 'steelblue',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 40,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 2
    },
    bottomContainer: {
        justifyContent: 'center',
        height: height / 3
        
        
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'darkblue',
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 30,
        paddingLeft: 20
    },
    formButton: {
        backgroundColor: 'steelblue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: 'cyan',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 2,
        shadowRadius: 1,
        elevation: 5,
    },
    formInputContainer: {
        marginBottom: 50,
        ...StyleSheet.absoluteFill,
        zIndex: -1,
        justifyContent: 'center'
    },
    closeButtonContainer: {
        backgroundColor: 'gainsboro',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 180,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 15,
        top: -20
    }
});

export default styles;