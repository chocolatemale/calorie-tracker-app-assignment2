import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../colors';

export default function Button({ title, onPress, color = "primary" }) {
    return (
        <Pressable 
            style={[styles.button, { backgroundColor: colors[color] }]} 
            onPress={onPress}
            android_ripple={{color: colors.white}}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
