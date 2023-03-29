import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Header({ onPress, isHide }) {
    return (
        <ImageBackground source={require('./../../assets/images/icon/headerBG.png')} style={{ width: '100%', height: hp(30), }} resizeMode='cover'>
            <View style={{ flexDirection: 'row', marginTop: hp(5) }}>
                <TouchableOpacity style={{ width: '30%' }} onPress={onPress}>
                    <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                </TouchableOpacity>
            </View>
            {isHide == true ? null :
                <View>
                    <Text style={{ textAlign: 'left', marginTop: wp(5), marginLeft: 30, color: 'white', fontSize: 20, }}>Find your</Text>
                    <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 35, fontWeight: 'bold' }}>Product</Text>
                </View>
            }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
})