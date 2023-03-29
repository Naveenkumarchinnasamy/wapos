
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, TextInput, ImageBackground, Alert, Picker } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import GradientButton from '../utils/GradientButton';

export default class OTP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            Password: '',
            ischecked: false,
        };
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/BG.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ marginTop: wp('10%'), padding: 30 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ width: '10%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                    <Image style={styles.back} source={require('./../image/icon/back.png')} />
                                </TouchableOpacity>
                                <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                    <View>
                                        {/* <Image style={styles.logo} source={require('./../image/icon/createblog.png')} /> */}
                                    </View>
                                </View>
                            </View>

                            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Verify Code</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center', color: '#8f92a1', marginTop: 10 }}>Code is sent to</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center', color: '#8f92a1', }}>example@email.com</Text>

                            <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>
                                <KeyboardAvoidingView behavior="padding">


                                    <View style={{ marginTop: 50 }}>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={'OTP CODE'}
                                                value={this.state.name}
                                                onChangeText={name => this.setState({ name })}
                                                keyboardType={'phone-pad'}
                                            />
                                        </View>
                                    </View>

                                </KeyboardAvoidingView>

                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#8f92a1', marginTop: 50 }}>Didn't receive code?</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#2145FE', fontWeight: 'bold', marginTop: 8, textDecorationLine: 'underline' }}>Resend OTP</Text>
                                </TouchableOpacity>

                                <GradientButton
                                    onPress={() => this.props.navigation.navigate('newPassword')}
                                    text={"Verify Email"}
                                    color1={'#2145FE'}
                                    color2={'#2145FE'}
                                    marginTop={30}
                                    borderRadius={10}
                                    width={280}
                                    height={50}
                                />


                                {/* <GradientButton
                                    style={{ marginVertical: 8., marginTop: 60, alignSelf: 'center' }}
                                    text="Verify Email"
                                    textStyle={{ fontSize: 17 }}
                                    gradientBegin="#2145FE"
                                    gradientEnd="#2145FE"
                                    gradientDirection="diagonal"
                                    height={60}
                                    width={280}
                                    radius={10}
                                    impact
                                    impactStyle='Light'
                                    onPressAction={() => this.props.navigation.navigate('newPassword')}
                                /> */}


                            </View>

                        </ScrollView>
                    </View>


                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 160,
        height: 35,
        marginBottom: wp('10%'),
        marginTop: 5
    },
    imgpicker: {
        width: 290,
        height: 130,
        alignSelf: 'center',
        marginTop: 20
    },
    search: {
        width: 40,
        height: 40,
        marginBottom: wp('10%')
    },
    back: {
        width: 30,
        height: 30,
        marginBottom: wp('10%')
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: wp('10%'),
        margin: 10
    },
    block: {
        margin: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 10,
        padding: 10
    },
    profile: {
        width: 70,
        height: 70,
        marginBottom: wp('10%')
    },
    dot: {
        width: 25,
        height: 10,
        marginTop: wp('2%'),
        marginLeft: 5
    },
    commentimg: {
        width: 30,
        height: 30,
        // marginBottom: wp('10%')
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