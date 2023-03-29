import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Dimensions, TouchableOpacity, ImageBackground, ActivityIndicator, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("window")
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import * as firebase from "firebase";
import { getCurrentUser } from '../api/helper';

export default class loginwithemail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            deviceid: '',
            userid: '',
            username: '',
            useremail: '',
            usergender: '',
            userimg: '',
            accesstoken: '',
            ischecked: false,
            isSwitchOn: false,
            driverActiveStatus: true,
            driverActiveStatus2: false,

        };
    }

    onChangeFunction(data) {
        if (data == true) {
            this.setState({ driverActiveStatus: false });
        } else if (data == false) {
            this.setState({ driverActiveStatus: true });
        }
    }

    checkUserDetails = async (user) => {

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
                this.props.navigation.navigate('Search')


            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleSignIn = async () => {

        const { email, password } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (email == "") {
            Alert.alert("Empty Field!", "Please enter your email address")
            return;
        } else if (reg.test(email) === false) {
            Alert.alert("Email Format!", "Please enter correct email")
            return;
        } else if (password == "") {
            Alert.alert("Empty Field!", "Please enter your password")
            return;
        } else if (password.length < 6) {
            Alert.alert("Password Limit!", "Please enter your password at least 6 characters")
            return;
        } else {

            this.setState({ loading: true })

            firebase.auth()
                .signInWithEmailAndPassword(email.trim(), password)
                .then((response) => {
                    this.setState({ loading: false })
                    this.checkUserDetails(response.user)

                    // const UID = firebase.auth().currentUser;
                    // alert(JSON.stringify(UID))
                    //   db.collection(`users`).get().then((querySnapshot) => {
                    //     querySnapshot.forEach((snapshot) => {
                    //       let data = snapshot.data();
                    //       if (data.id == UID) {

                    //       }
                    //     })
                    //   })

                })
                .catch(error => {
                    this.setState({ loading: false })

                    if (error.code === 'auth/user-not-found') {
                        Alert.alert("Not Found!", 'This account is not available.')
                        return;
                    }

                    if (error.code === 'auth/user-not-found') {
                        Alert.alert("Email Invalid!", 'That email address is invalid!')
                        return;
                    }
                    if (error.code === 'auth/wrong-password') {
                        Alert.alert("Password Invalid!", 'That password is invalid!')
                        return;
                    }

                });
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>


                <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: Height, position: 'absolute', left: 0, top: 0, }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>

                    </View>

                    <View style={{ marginTop: wp('0%'), padding: 0 }}>


                        <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 20, marginTop: 25, }}>welcome back,</Text>
                        <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 0, }}>Sign in</Text>

                        <View style={[styles.firstInput, { marginTop: 120, alignSelf: 'center' }]}>
                            <TextInput
                                style={styles.input}
                                label='EMAIL'
                                mode='outlined'
                                theme={{
                                    colors: {
                                        primary: '#c8c8c8',
                                        outlineColor: '#ffffff'
                                    },
                                    roundness: 15
                                }}
                                placeholder={'EMAIL'}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                                right={<TextInput.Icon name={() => <FontAwesome5 name="envelope" size={20} style={{ marginTop: 9 }} color="#D9D9D9" />} />}
                            />
                        </View>

                        <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                label='PASSWORD'
                                mode='outlined'
                                theme={{
                                    colors: {
                                        primary: '#c8c8c8',
                                        outlineColor: '#ffffff'
                                    },
                                    roundness: 15
                                }}
                                placeholder={'PASSWORD'}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                right={<TextInput.Icon name={() => <FontAwesome5 name="lock" size={20} style={{ marginTop: 9 }} color="#D9D9D9" />} />}
                            />
                        </View>

                        <TouchableOpacity>
                            <Text style={{ textAlign: 'right', marginRight: 20, marginTop: 20, color: '#60C2E8', fontSize: 16 }}>Forgot your password?</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 30 }}>
                            <View style={{ width: '10%', marginTop: -26 }}>
                                <Switch
                                    style={styles.switchAlignStyle}
                                    value={this.state.driverActiveStatus}
                                    trackColor={{ false: "#60C2E8", true: "#60C2E8" }}
                                    thumbColor={this.state.driverActiveStatus ? "#ffffff" : "#ffffff"}
                                    onValueChange={() => {
                                        this.onChangeFunction(this.state.driverActiveStatus);
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 10, color: '#747474' }}>Remember me</Text>
                        </View>

                        {this.state.loading == false ? null : <ActivityIndicator size="large" color={'#44c7f3'} style={{ marginTop: 20, marginBottom: -10 }} />}

                        <TouchableOpacity onPress={() => this.handleSignIn()} style={{ marginTop: 25, alignSelf: 'center' }}>
                            <ImageBackground source={require('./../image/fb_bg.png')} borderRadius={50} style={{ width: 230, height: 50 }} resizeMode='stretch'>
                                <View style={{ width: 230, borderRadius: 100, flexDirection: 'row', padding: 15, }}>
                                    <Text style={{ color: "white", paddingLeft: 70, fontSize: 20, marginTop: -4 }}>Sign in</Text>
                                    <FontAwesome5 name="chevron-right" style={{ marginLeft: 50, marginTop: 2 }} size={16} color="#ffffff" />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('signupuser')} style={{ marginTop: 40 }}>
                            <Text style={{ textAlign: 'center', marginTop: 20, color: '#60C2E8', fontSize: 18 }}>I want to create a new account</Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
    buttonText: {

        fontSize: 20,
        color: '#000',
        marginTop: hp('1%'),
    },
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
        marginTop: 15,
        marginHorizontal: 20,
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
        width: 310,

        backgroundColor: '#ffffff',
        fontSize: 15,

    },



    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',
        padding: 0,
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        alignSelf: 'center',

    },

    switchAlignStyle: {
        alignContent: "center",
        marginTop: 15
    },

});