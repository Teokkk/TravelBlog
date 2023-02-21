import React, { useEffect } from 'react';

import {
  Dimensions, FlatList, SafeAreaView, StyleSheet, Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { homeGetAPI } from '../../actions/HomeAction';
import ItemView from '../../components/ItemView';
import useSettingMode from '../../hooks/settingMode';

// const homeListScreen = ['Home', 'Sale', 'Purchase']
const width = Dimensions.get('window').width

function HomeScreen({navigation}) {
    const {mode, settingMode} = useSettingMode()
    const dispatch = useDispatch()
    const home = useSelector(state => state.home)  

    useEffect(() => {
        dispatch(homeGetAPI())
    }, [])

    const handleItem = (item) => {
        navigation.navigate('[Home]Detail', item)
    }

    const renderItemView = ({ item, index }) => <ItemView item={item} width={width} onEvent={(item) => handleItem(item)}/>

    return (
        <SafeAreaView style={{
            backgroundColor: mode === 0 ? 'black' : 'white'
        }}>
            <Text style={{
                fontWeight: '700',
                fontSize: 15,
                margin: 20
            }}>Maui bay Popular Destination</Text>
            <FlatList
                style={{
                    marginHorizontal: 4
                }}
                numColumns={2}
                data={home?.homeData}
                renderItem={renderItemView}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
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
});

export default HomeScreen