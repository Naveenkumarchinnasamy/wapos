import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as firebase from "firebase";

import Toast from "react-native-toast-message";
import GradientButton from '../utils/GradientButton';
import { googleLogin, getCurrentUser } from '../api/helper';

WebBrowser.maybeCompleteAuthSession();

export default function login(props) {

    const [loading, setLoading] = useState(true)
    const [accessToken, setAccessToken] = React.useState(null);

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: "104205684075-69rrt9jmls530tlj07ve7p0l96a2in4t.apps.googleusercontent.com",
        androidClientId: "104205684075-ijp41lo37jgjj78f4m0hnokjnu4sn52l.apps.googleusercontent.com",
        iosClientId: "104205684075-ikvv1e3at2fhmeud4qs7vc0drqhu1cpd.apps.googleusercontent.com",
        expoClientId: "104205684075-69rrt9jmls530tlj07ve7p0l96a2in4t.apps.googleusercontent.com"
    });

    const checkAuthRegister = async (user) => {

        let idToken = await user.getIdToken(true)

        googleLogin(idToken)
            .then((response) => response.json())
            .then((responseJson) => {
                checkUserDetails(user)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const checkUserDetails = async (user) => {

        let idToken = await user.getIdToken(true)

        getCurrentUser(idToken)
            .then((response) => response.json())
            .then((responseJson) => {

                let UID = `${responseJson.data.id}`;
                AsyncStorage.setItem('currentUserFirebaseToken', idToken)
                AsyncStorage.setItem('currentUserFirebaseID', responseJson.data.firebase_user_uid)
                AsyncStorage.setItem('currentUserID', UID);
                AsyncStorage.setItem('currentUserFirstName', `${responseJson.data.first_name}`)
                AsyncStorage.setItem('currentUserLastName', `${responseJson.data.last_name}`)
                AsyncStorage.setItem('currentUserEmail', `${responseJson.data.email}`)
                AsyncStorage.setItem('currentUserCountry', `${responseJson.data.country}`)
                AsyncStorage.setItem('currentUserStates', `${responseJson.data.states}`)
                AsyncStorage.setItem('currentUserImage', `${responseJson.data.profile_picture}`)
                AsyncStorage.setItem('currentUserRating', `${responseJson.data.rating}`)
                AsyncStorage.setItem('currentUserStatus', `${responseJson.data.status}`)

                setLoading(false)
                props.navigation.navigate('Search')


            })
            .catch((error) => {
                console.log(error)
            });
    }

    const checkAuth = async () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                checkUserDetails(user)
            } else {
                setLoading(false)
            }
        })

    }

    React.useEffect(() => {

        checkAuth()

        if (response?.type === "success") {

            const { id_token } = response.params;
            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            const auth = firebase.auth()
            firebase.auth().signInWithCredential(credential).then((user) => {

                if (user) {

                    if (user.additionalUserInfo.isNewUser == false) {
                        checkUserDetails(user.user)
                    } else {
                        checkAuthRegister(user.user)
                    }
                }
            });

        }

    }, [response, accessToken]);

    const login = () => {
        props.navigation.navigate('#')
    }

    const renderButton = () => {
        if (loading) {
            <View>
            </View>
        }
        return (
            <View style={{ marginTop: 5, marginBottom: 15 }}>
                <ActivityIndicator color="#2145FE" size={'large'} animating={loading} />
            </View>
        )
    };

    if (loading == true) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={'#44c7f3'} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            <ImageBackground source={require('./../image/icon/loginbg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                <View style={{ marginTop: wp('10%'), padding: 30 }}>
                    <ScrollView>

                        <Image style={styles.logintext} source={require('./../image/icon/logo.png')} />

                        <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>


                            {loading == false ? null : renderButton()}

                            <GradientButton onPress={() => login()} text={'Continue as a guest'} color1={'#44c7f3'} color2={'#2a78bc'} marginTop={0} />

                            <GradientButton
                                onPress={() => props.navigation.navigate('signupuser')}
                                text={"Create account"}
                                color1={'transparent'}
                                color2={'transparent'}
                                marginTop={10}
                                borderRadius={50}
                                width={280}
                                height={45}
                                borderWidth={2}
                                borderColor={'#44c7f3'}
                                textColor={'#44c7f3'}
                            />

                            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => props.navigation.navigate('loginwithemail')}>
                                <Text style={{ color: '#a1a2a4', alignSelf: 'center', fontSize: 17, marginTop: wp('5%') }}>Already have account? <Text style={{ color: '#44c7f3', fontWeight: 'bold' }}>Login</Text></Text>
                            </TouchableOpacity>

                            {/* <TouchableOpacity style={{ marginTop: 50 }}>
                                <ImageBackground source={require('./../image/fb_bg.png')} borderRadius={50} style={{ width: 280, height: 50 }} resizeMode='stretch'>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 15, }}>
                                        <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={require('./../image/fb.png')} />
                                        <Text style={{ color: "white", paddingLeft: 30 }}>Sign in with facebook</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity> */}

                            <TouchableOpacity onPress={() => promptAsync()} style={{ marginTop: '15%' }}>
                                <ImageBackground source={require('./../image/gp_bg.png')} borderRadius={50} style={{ width: 280, height: 50 }} resizeMode='stretch'>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 15, }}>
                                        <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require('./../image/gp.png')} />
                                        <Text style={{ color: "white", paddingLeft: 30 }}>Sign in with Google+</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>

            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 130,
        height: 50,
        marginBottom: wp('10%')
    },
    logintext: {
        width: 220,
        height: 85,
        marginBottom: wp('40%'),
        marginTop: wp('20%'),
        alignSelf: 'center'
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
    },
    button: {
        marginTop: hp('3%'),
        alignItems: 'center',
        backgroundColor: '#E0C800',
        borderRadius: wp('2%'),
        height: 40,
        marginHorizontal: wp('13%'),
    },
    // buttonText: {

    //     fontSize: 20,
    //     color: '#000',
    //     marginTop: hp('1%'),
    // },
    signupView: {
        alignItems: 'center',
        marginTop: hp('35%')
    },
    alresdy: {
        fontSize: hp('2.5%'),
        color: '#666666'
    },
    signupText: {
        fontSize: hp('2.5%'),
        marginTop: hp('1%'),
        color: '#00cb9c',
        fontWeight: 'bold'
    },
    firstInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 25,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        padding: 5
    },
    secondInput: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 40,
        borderBottomColor: '#EAEAEAEA',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },
    input: {
        width: WIDTH - 85,
        height: 40,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 15
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});