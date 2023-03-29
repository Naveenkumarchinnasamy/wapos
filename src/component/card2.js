import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import { height } from 'react-native-dimension';
import MaskInput from 'react-native-mask-input';
import GradientButton from '../utils/GradientButton';

export default class card2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            Password: '',
            loading: false,
            deviceid: '',
            userid: '',
            username: '',
            useremail: '',
            usergender: '',
            userimg: '',
            accesstoken: '',

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ marginLeft: 50, textAlign: 'left', fontSize: 30, color: '#ffffff', marginTop: 20, marginBottom: 50 }}>Just one{'\n'}<Text style={{ fontWeight: 'bold', fontSize: 35 }}>more step</Text></Text>

                    <ScrollView>
                        <View style={{ marginTop: wp('12%'), padding: 0 }}>

                            <View style={[styles.col, { marginTop: -20 }]}>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: 5, padding: 10 }}>You choose to buy:</Text>
                                <Text style={{ fontSize: 20, color: '#44c7f3', fontWeight: 'bold', textAlign: 'center', marginTop: -15, padding: 10 }}>Sony Playstation 4</Text>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: -15, padding: 10 }}>Wapos total price:</Text>
                                <Text style={{ fontSize: 20, color: '#44c7f3', fontWeight: 'bold', textAlign: 'center', marginTop: -15, padding: 10 }}>252$</Text>

                            </View>

                            <View style={styles.col}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontSize: 20, color: '#44c7f3', textAlign: 'center', marginTop: 10 }}>Card details:</Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <FontAwesome5 name="camera" style={{ alignSelf: 'flex-end', marginRight: 15, marginTop: 13 }} size={20} color="#44c7f3" />
                                    </View>
                                </View>

                                <View>
                                    <Text style={{ color: "#A4A4A4", fontSize: 17, marginLeft: wp('9%'), marginTop: wp('8%'), textAlign: 'left' }}>Card number</Text>
                                    <View style={styles.firstInput}>
                                        <FontAwesome5 name="cc-visa" style={{ marginLeft: 5, marginTop: 5, padding: 5 }} size={18} color="#44c7f3" />
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'**** **** **** ****'}
                                            placeholderStyle={{ fontSize: 20 }}
                                            value={this.state.Password}
                                            onChangeText={Password => this.setState({ Password })}
                                            maxLength={16}
                                            keyboardType='phone-pad'
                                        />
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ color: "#A4A4A4", fontSize: 17, marginLeft: wp('9%'), marginTop: wp('8%'), textAlign: 'left' }}>Valid unit</Text>
                                        <View style={styles.firstInput}>
                                            <MaskInput
                                                style={[styles.input, { width: '90%', textAlign: "center" }]}
                                                placeholder={'month / year'}
                                                placeholderStyle={{ fontSize: 20, textAlign: 'center' }}
                                                value={this.state.Password1}
                                                onChangeText={Password1 => this.setState({ Password1 })}
                                                maxLength={5}
                                                keyboardType='phone-pad'
                                                mask={[/\d/, /\d/, '/', /\d/, /\d/,]}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ color: "#A4A4A4", fontSize: 17, marginLeft: wp('9%'), marginTop: wp('8%'), textAlign: 'left' }}>CVV</Text>
                                        <View style={styles.firstInput}>
                                            <TextInput
                                                style={[styles.input, { width: '90%', marginLeft: 10 }]}
                                                placeholder={'***'}
                                                placeholderStyle={{ fontSize: 20, textAlign: 'center' }}
                                                value={this.state.Password2}
                                                onChangeText={Password2 => this.setState({ Password2 })}
                                                maxLength={3}
                                                keyboardType='phone-pad'
                                            />
                                        </View>
                                    </View>
                                </View>

                                <View>
                                    <Text style={{ color: "#A4A4A4", fontSize: 17, marginLeft: wp('9%'), marginTop: wp('8%'), textAlign: 'left' }}>Billing address</Text>
                                    <View style={styles.firstInput}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'full name'}
                                            placeholderStyle={{ fontSize: 20 }}
                                            value={this.state.Password4}
                                            onChangeText={Password4 => this.setState({ Password4 })}
                                        />
                                    </View>
                                </View>

                                <Text style={{ alignSelf: 'center', color: '#44c7f3', margin: 20, fontSize: 16, marginBottom: 5 }}>All purchases are secured</Text>

                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('#')}
                                        text={'Cancel order'}
                                        color1={'#ffffff'}
                                        color2={'#ffffff'}
                                        marginTop={20}
                                        borderRadius={50}
                                        width={150}
                                        height={45}
                                    />
                                    {/* <GradientButton
                                        style={{ marginVertical: 8., marginTop: 20, marginBottom: 10, alignSelf: 'flex-start', alignSelf: 'center' }}
                                        text="Cancel order"
                                        textStyle={{ fontSize: 17, color: '#44c7f3' }}
                                        gradientBegin="#ffffff"
                                        gradientEnd="#ffffff"
                                        gradientDirection="diagonal"
                                        height={45}
                                        width={150}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('#')}
                                    /> */}
                                </View>
                                <View style={{ width: '50%' }}>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('paymentConfirm')}
                                        text={'Pay 25$'}
                                        color1={'#BBBBBB'}
                                        color2={'#BBBBBB'}
                                        marginTop={20}
                                        borderRadius={50}
                                        width={150}
                                        height={45}
                                    />
                                    {/* <GradientButton
                                        style={{ marginVertical: 8., marginTop: 20, marginBottom: 10, alignSelf: 'flex-start', alignSelf: 'center' }}
                                        text="Pay 25$"
                                        textStyle={{ fontSize: 17, color: '#ffffff' }}
                                        gradientBegin="#BBBBBB"
                                        gradientEnd="#BBBBBB"
                                        gradientDirection="diagonal"
                                        height={45}
                                        width={150}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('paymentConfirm')}
                                    /> */}
                                </View>
                            </View>

                        </View>

                    </ScrollView>

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
    secondInput: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 40,
        borderBottomColor: '#EAEAEAEA',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },
    firstInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderColor: '#f1f2f3',
        borderWidth: 1,
        padding: 5,
        height: 50
    },
    input: {
        width: '80%',
        height: 30,
        padding: 5,
        marginBottom: 0,
        color: 'black',
        fontSize: 16,
        marginTop: 6,
    },

    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
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

    }
});