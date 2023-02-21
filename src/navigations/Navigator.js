import { Image } from 'react-native';
import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Images from '../../assets';
import DetailScreen from '../modules/home/DetailScreen';
import HomeScreen from '../modules/home/HomeScreen';
import LoginScreen from '../modules/LoginScreen';
import PurchaseScreen from '../modules/PurchaseScreen';
import SaleScreen from '../modules/SaleScreen';
import ToursScreen from '../modules/tours/ToursScreen';
import WelcomeScreen from '../modules/WelcomeScreen';

const ToursStack = createNativeStackNavigator()
const LoginStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const HomeStackNavigator = () => (
    <HomeStack.Navigator
    screenOptions={{
        headerShown: true,
        // header: () => (
        //     <View style={{
        //         backgroundColor: 'red',
        //         height: 60
        //     }}></View>
        // )
    }}
>
    <HomeStack.Screen 
        name='Home' 
        component={HomeScreen}/>
    <HomeStack.Screen 
        options={({ route }) => ({ 
            title: route.params.name 
        })}
        name='[Home]Detail' 
        component={DetailScreen}/>
</HomeStack.Navigator>
)

const ToursStackNavigator = () => (
    <ToursStack.Navigator
        screenOptions={{
            headerShown: true,
        }}
    >
    <ToursStack.Screen 
        name='Tours' 
        component={ToursScreen}/>
    <ToursStack.Screen 
        options={({ route }) => ({ 
            title: route.params.name 
        })}
        name='[Tours]Detail' 
        component={DetailScreen}/>
    </ToursStack.Navigator>
)

const LoginStackNavigator = () => (
    <LoginStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <LoginStack.Screen 
            name='Welcome' 
            component={WelcomeScreen}/>
        <LoginStack.Screen 
            name='Login' 
            component={LoginScreen}/>
    </LoginStack.Navigator>
)

const TabsNavigator = () => (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            // let iconName;

            // if (route.name === 'Home') {
            //     iconName = 'home'
            // } else if (route.name === 'News') {
            //     iconName = 'film'
            // } else {
            //     iconName = 'bars'
            // }
            // return <Icon name={iconName} size={size} color={color}/>
            let tabIcon

            if (route.name === 'Home') {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            } else if(route.name === 'Purchase') {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            } else {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            }
            return <Image source={tabIcon} style={{width: size, height: size, resizeMode: 'cover'}}/>
        },
        // tabBarActiveTintColor: 'white',
        // tabBarInactiveTintColor: '#81898a',
        size: 20,
        headerShown: false,
        tabBarStyle: {
            // backgroundColor: '#7f5bc7'
            backgroundColor: 'white'
        }
    })}
    >
        <Tabs.Screen 
            options={{title: ""}} 
            name='Home' 
            component={HomeStackNavigator}
        />
        <Tabs.Screen options={{title: ""}}  name='Tours'  component={ToursStackNavigator}/>
        <Tabs.Screen options={{title: ""}}  name='Purchase'  component={PurchaseScreen}/>
        <Tabs.Screen options={{title: ""}}  name='Sale'  component={SaleScreen}/>
    </Tabs.Navigator>
)


const Navigator = () => {
    const app = useSelector(state => state.app) 
    return (
        <NavigationContainer>
            {
            app?.isLogin 
            ? 
            <TabsNavigator/> 
            :
            <LoginStackNavigator />
            }
        </NavigationContainer>
    )
}

export default Navigator