import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,Dimensions,TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../Styles/Style';
import { appLogin } from '../actions/AppAction';
import EnterText from '../components/EnterText';
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {useSharedValue, useAnimatedStyle, interpolate,withTiming, withDelay, withSequence, withSpring} from 'react-native-reanimated';

function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const {height, width} = Dimensions.get('window');


    //animation
    const imagePosition = useSharedValue(1);
    const formButtonScale = useSharedValue(1);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0, 1], [- height/2, 0]);
        return {
            transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
        }
    })

    const buttonAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0 , 1], [250, 0]);
        return {
            opacity: withTiming(imagePosition.value, {duration: 500}),
            transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
        }
    })

    const closeButtonContainerStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0 , 1], [180, 360]);
        return {
            opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
            transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
        }
    })

    const formAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0 , 1], [180, 360]);
        return {
            opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300})
            
        }
    })

    const formButtonAnimatedStyle = useAnimatedStyle(() =>{
        return {
            transform: [{scale: formButtonScale.value}]
        }
    } )

    useEffect(()=> {
        console.log('***** START LOGIN')
        return () => {
            console.log('***** START HOME SCREEN')
        }
    }, [])

    const handleLogin = () => {
        imagePosition.value = 0;
        if (register) {
            setRegister(false);
        }
        if (email === '' || password === '') {
            setError(!error)
        } else {
            dispatch(appLogin(true))
        }
    }

    

    const handleRegister = () => {
        imagePosition.value = 0;
        if (!register) {
            setRegister(true);
        }
    }
    

    return (
        <View style={styles.container}>
            <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
                <Svg height = {height + 100} width = {width}>
                    <ClipPath id = "clipPathId">
                        <Ellipse cx = {width / 2} rx = {height} ry={height + 100}/>
                    </ClipPath>
                    <Image 
                        href={require("../../assets/Image/LoginScreen.png")}
                        width={width + 100}
                        height={height + 100}
                        preserveAspectRatio="xMidYMid slice" 
                        clipPath='url(#clipPathId)'
                        />
                </Svg>
                <Animated.View style = {[styles.closeButtonContainer, closeButtonContainerStyle]}>
                    <Text onPress={() => imagePosition.value = 1}>X</Text>
                </Animated.View>
            </Animated.View>   
            
            <View style={styles.bottomContainer}>
                <Animated.View style={buttonAnimatedStyle}>
                    <Pressable style={styles.button} onPress = {handleLogin}>
                        <Text style={styles.buttonText}> Log In </Text>
                    </Pressable>
                </Animated.View>
                <Animated.View style = {buttonAnimatedStyle}>
                    <Pressable style={styles.button} onPress = {handleRegister}>
                        <Text style={styles.buttonText}> Register </Text>
                    </Pressable>
                </Animated.View>
                <Animated.View style = {[styles.formInputContainer, formAnimatedStyle]}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "Email"
                        placeholderTextColor="grey"
                        onChange={(text) => {
                        setEmail(text)}}
                    />
                    {register && (
                        <TextInput 
                        style = {styles.textInput}
                        placeholder = "Fullname"
                        placeholderTextColor="grey"
                    />
                    )}
                    
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "Password"
                        placeholderTextColor="grey"
                        error={error} 
                        isSecurity={true}
                        onChange={(text) => {
                        setPassword(text)}}
                    />
                    
                    <Animated.View style = {[styles.formButton, formButtonAnimatedStyle]}>
                        <Pressable onPress = {() => formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))}>

                            <Text style = {styles.buttonText}>{register ? 'Register' : 'Log In' }</Text>

                        </Pressable>
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    )
}



// const LoginScreen = useTracking(Login)

export default LoginScreen