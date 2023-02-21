import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import useSettingMode from '../hooks/settingMode';

function SaleScreen() {
    const {mode, settingMode} = useSettingMode()
    return (
        <View style={[styles.container, {
            backgroundColor: mode === 0 ? 'black' : 'white',
        }]}>
            <Text>Welcome Sale Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default SaleScreen