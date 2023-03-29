import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

import Toast from "react-native-toast-message";
import GradientButton from '../utils/GradientButton';


var radio_props = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
];
export default class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            gender: '',
            ischecked: false,
            loading: false
        };
    }



    register = () => {

        const { name } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        const { gender } = this.state;
        const { ischecked } = this.state;


        if (name == '') {

            alert("Please Enter Your Name");
            return;
        }
        else if (email == '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (password == '') {
            alert("Please Enter Your Password");
            return;
        }
        else if (this.state.password.length < 6) {
            alert("Please Enter Atleast 6 Digits Password");
            return;
        }
        else if (gender == '') {
            alert("Please Select Your Gender");
            return;
        }
        else if (ischecked == false) {
            alert("Please accept privacy & policy");
            return;
        }
        else {
            this.setState({ loading: true })

            console.log('start')

            fetch('https://spot.tradingdevelopmentsystem.com/api/register', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    gender: gender,
                    agreement: ischecked
                })
            }).then((response) => response.json())
                .then((responseJson) => {

                    console.log(responseJson)
                    this.setState({ loading: false })



                    if (responseJson.message == 'The given data was invalid.') {
                        alert('The given data was invalid. ');
                        return;
                    }

                    if (responseJson.message == 'User has been register Successfully') {
                        // Toast.show({
                        //     type: "success",
                        //     text1: `Your Account Has Been Created Successfully`,
                        //     text2: `Success`,
                        //     visibilityTime: 4000,
                        //     topOffset: 25,
                        // });
                        alert('Your Account Has Been Created Successfully');
                        this.props.navigation.goBack(null);
                        return;
                    }

                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    renderButton() {
        if (this.state.loading) {
            <View>
            </View>
        }
        return (
            <View style={{ marginTop: 5, marginBottom: 15 }}>
                <ActivityIndicator color="#2145FE" size={'large'} animating={this.state.loading} />
            </View>
        )
    };



    render() {
        const { ischecked } = this.props
        return (

            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>

                <View style={{ marginTop: wp('10%'), padding: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image style={styles.logo} source={require('./../image/signuptext.png')} />

                        <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>
                            <KeyboardAvoidingView behavior="padding">

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold' }}>FULL NAME</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'FULL NAME'}
                                        value={this.state.name}
                                        onChangeText={name => this.setState({ name })}

                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>EMAIL</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'example@email.com'}
                                        value={this.state.email}
                                        onChangeText={email => this.setState({ email })}

                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>PASSWORD</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Password'}
                                        value={this.state.password}
                                        onChangeText={password => this.setState({ password })}
                                        secureTextEntry={true}

                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>GENDER</Text>
                                <View style={{ width: '60%', marginLeft: 20, marginTop: wp('5%') }}>
                                    <RadioForm
                                        radio_props={radio_props}
                                        initial={0}
                                        formHorizontal={true}
                                        labelHorizontal={true}
                                        onPress={(value) => this.setState({ gender: value })}
                                        buttonSize={0}
                                        buttonOuterSize={20}
                                        style={{ padding: 10 }}
                                        selectedButtonColor={'#2145FE'}
                                        selectedLabelColor={'#2145FE'}
                                        labelStyle={{ marginRight: 10, fontSize: 18 }}
                                    />
                                </View>



                            </KeyboardAvoidingView>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '20%' }}>
                                    <View style={styles.checkboxcontainer}>
                                        <CheckBox
                                            value={this.state.ischecked}
                                            onValueChange={(itemValue) =>
                                                this.setState({ ischecked: itemValue })}
                                            style={styles.checkbox}
                                        />
                                        {/* <Text style={{ color: 'white', fontSize: 15 }}>I accept Terms & Conditions</Text> */}
                                    </View>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text style={{ color: '#88888B', marginTop: wp('5%'), marginBottom: wp('5%') }}>By creating your account, you agree to {"\n"}our <Text style={{ color: '#2145FE', fontWeight: "bold" }}>Terms of Use & Privacy Policy</Text></Text>
                                </View>

                            </View>
                            <View>
                                <Text style={{ alignSelf: 'center', color: '#c9c9c9', marginTop: 0, marginBottom: 10 }}> _______________      OR      _______________</Text>
                            </View>

                            <View style={{ marginTop: wp('0%'), marginBottom: 10, alignContent: 'center', alignItems: 'center' }}>

                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity onPress={() => console.log('#')} style={{ width: '20%' }}>
                                        <Image style={{ width: 40, height: 40, margin: 10 }} source={require('./../image/icon/social/google.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => console.log('#')} style={{ width: '20%' }}>
                                        <Image style={{ width: 40, height: 40, margin: 10 }} source={require('./../image/icon/social/facebook.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => console.log('#')} style={{ width: '20%' }}>
                                        <Image style={{ width: 40, height: 40, margin: 10 }} source={require('./../image/icon/social/twitter.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => console.log('#')} style={{ width: '20%' }}>
                                        <Image style={{ width: 40, height: 40, margin: 10 }} source={require('./../image/icon/social/linkedin.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => console.log('#')} style={{ width: '20%' }}>
                                        <Image style={{ width: 40, height: 40, margin: 10 }} source={require('./../image/icon/social/vk.png')} />
                                    </TouchableOpacity>


                                </View>

                            </View>

                            {this.state.loading == false ? null : this.renderButton()}

                            <GradientButton onPress={() => this.register()} text={' Create Account'} color1={'#2145FE'} color2={'#2145FE'} marginTop={0} borderRadius={10} />

                        </View>
                    </ScrollView>
                </View>



                {/* </ImageBackground> */}



                <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
                    <Text style={{ color: 'black', alignSelf: 'center', fontSize: 16, margin: 20 }}>DONT HAVE AN  ACCOUNT? <Text style={{ color: '#EAAA00' }}>SIGNUP</Text></Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {
        width: 90,
        height: 30,
        marginBottom: wp('10%')
    },
    logintext: {
        width: 300,
        height: 130,
        marginBottom: wp('10%'),
        marginTop: wp('10%'),
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
    checkboxcontainer: {
        flexDirection: "row",
        marginTop: wp('5%'),
        marginLeft: wp('5%')
    },
    checkbox: {
        alignSelf: "center",
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
});