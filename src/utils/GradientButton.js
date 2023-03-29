import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({ text, textColor, onPress, color1, color2, width, height, borderRadius, marginTop, borderWidth, borderColor }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[color1, color2]}
                style={[styles.buttonWrap, { borderWidth: borderWidth == undefined ? 0 : borderWidth, borderColor: borderColor == undefined ? 'transparent' : borderColor, width: width == undefined ? 280 : width, height: height == undefined ? 50 : height, borderRadius: borderRadius == undefined ? 50 : borderRadius, marginTop: marginTop == undefined ? 10 : marginTop }]}
            >
                <Text style={[styles.buttonText, { color: textColor == undefined ? '#ffffff' : textColor }]}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrap: {
        marginVertical: 8.,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        fontSize: 17,
    }
})