import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import styles from '../Styles/Style';
function WelcomeScreen({navigation}) {

    const handleMoveLoginScreen = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <Image style={styles.backgroundImg}
                source={require('../../assets/Image/WelcomeScreen.png')} />
            <View style={styles.centerObj}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    }}>
                    <Text style={{
                        fontWeight: '670',
                        fontSize: 60,
                        marginTop: '90%',
                        color: 'white',
                        letterSpacing: 5
                    }}> Welcome To</Text>
                    <Text style={{
                        fontSize: 40,
                        textAlign: 'center',
                        color: 'white',
                        letterSpacing: 3
                    }}>
                      Blog and Travel
                    </Text>
                </View>
                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={handleMoveLoginScreen}>
                        <Text style={ styles.buttonText }>Click To Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default WelcomeScreen