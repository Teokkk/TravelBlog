import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

function BarButton({
    isActive = false,
    title,
    image,
    onEvent
}) {

    
    return (
        <TouchableOpacity 
            style={styles.content} 
            onPress={() => {
                onEvent(title)
            }}>
            <Image style={styles.image} source={image}/>
            <Text style={{
                fontWeight: isActive ? '900' : '400'
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        marginBottom: 10
    }
});

export default BarButton