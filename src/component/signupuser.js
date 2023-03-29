import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Dimensions, TouchableOpacity, ImageBackground, Alert, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import * as firebase from "firebase";
import { googleLogin } from '../api/helper';

export default class signupuser extends React.Component {
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
            driverActiveStatus: false,
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

    checkAuthRegister = async (user) => {

        let idToken = await user.getIdToken(true)

        googleLogin(idToken)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({ loading: false })

                Alert.alert("Congratulations!", "Your account has been registered. Please login to your account")
                this.props.navigation.goBack(null)

            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleSignUp = async () => {

        const { email, password, driverActiveStatus } = this.state;
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
        } else if (driverActiveStatus == false) {
            Alert.alert("I Agree", "Please accept Wapos Terms & Conditions")
            return;
        } else {
            this.setState({ loading: true })
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user
                    this.checkAuthRegister(user)
                })
                .catch((error) => {
                    this.setState({ loading: false })
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert("Invalid Email!", 'That email address is already in use!')
                    }
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert("Invalaid Email!", 'That email address is invalid!')
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>

                <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: Height, position: 'absolute', left: 0, top: 0, }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>

                    </View>

                    <View style={{ marginTop: wp('8%'), padding: 0 }}>


                        <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 20, marginTop: 15, }}>Hello,</Text>
                        <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 35, fontWeight: 'bold', marginTop: 0, }}>Sign up</Text>

                        <View style={[styles.firstInput, { marginTop: wp(25) }]}>
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

                        <View style={[styles.firstInput, { marginTop: 10 }]}>
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

                        <View style={{ flexDirection: 'row', paddingLeft: 0, marginTop: 30, alignSelf: 'center' }}>
                            <View style={{ width: '10%', marginTop: -26 }}>
                                <Switch
                                    style={styles.switchAlignStyle}
                                    value={this.state.driverActiveStatus}
                                    trackColor={{ false: "#DBDBDB", true: "#44c7f3" }}
                                    thumbColor={this.state.driverActiveStatus ? "#ffffff" : "#ffffff"}
                                    onValueChange={() => {
                                        this.onChangeFunction(this.state.driverActiveStatus);
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 10, color: '#747474' }}>I Agree to Wapos <Text style={{ color: '#60C2E8' }}>T&C</Text></Text>
                        </View>

                        {this.state.loading == false ? null : <ActivityIndicator size="large" color={'#44c7f3'} style={{ marginTop: 20, marginBottom: -10 }} />}

                        <TouchableOpacity onPress={() => this.handleSignUp()} style={{ marginTop: 25, alignSelf: 'center' }}>
                            <ImageBackground source={require('./../image/fb_bg.png')} borderRadius={50} style={{ width: 230, height: 50 }} resizeMode='stretch'>
                                <View style={{ width: 230, borderRadius: 100, flexDirection: 'row', padding: 15, }}>
                                    <Text style={{ color: "white", paddingLeft: 70, fontSize: 20, marginTop: -4 }}>Sign up</Text>
                                    <FontAwesome5 name="chevron-right" style={{ marginLeft: 50, marginTop: 2 }} size={16} color="#ffffff" />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('loginwithemail')} style={{ marginTop: 1, marginBottom: 20 }}>
                            <Text style={{ textAlign: 'center', marginTop: 20, color: '#60C2E8', fontSize: 18 }}>I already have an account</Text>
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
        marginLeft: 26,


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