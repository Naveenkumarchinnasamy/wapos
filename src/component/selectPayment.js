import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import { height } from 'react-native-dimension';

export default class selectPayment extends React.Component {
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

                            <View style={styles.col}>
                                <Text style={{ fontSize: 20, color: '#44c7f3', textAlign: 'center' }}>Money matters</Text>
                                <Text style={{ fontSize: 16, color: '#868686', textAlign: 'center', marginTop: 5, padding: 10 }}>In order for the buyer to transfer the purchase money and for you to get your fee, a money transfer method is required</Text>
                            </View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('card2')} style={{ alignSelf: 'center' }}>
                                <View style={{
                                    width: 320, height: 60, borderRadius: 15, backgroundColor: '#ffffff', shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    marginVertical: 10

                                }}>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 25, }}>
                                        <Text style={{ color: "#44c7f3", fontSize: 17, marginTop: -5 }}>Pay with Credit or debit</Text>
                                        <FontAwesome5 name="credit-card" style={{ alignSelf: 'flex-end', marginLeft: 60, marginTop: -7 }} size={25} color="#44c7f3" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View>
                                <Text style={{ alignSelf: 'center', color: '#44c7f3', marginTop: 10, marginBottom: 10 }}> ____________________ <Text style={{ color: '#878B8E', fontSize: 17 }}>Or</Text> ____________________</Text>
                            </View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center' }}>
                                <View style={{
                                    width: 320, height: 60, borderRadius: 15, backgroundColor: '#44c7f3',
                                    marginVertical: 5

                                }}>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 25, }}>
                                        <Text style={{ color: "#ffffff", fontSize: 17, marginTop: -5, marginRight: 30 }}>Pay with Wapos card</Text>
                                        <FontAwesome5 name="credit-card" style={{ alignSelf: 'flex-end', marginLeft: 60, marginTop: -7 }} size={25} color="#ffffff" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')} style={{ alignSelf: 'center' }}>
                                <View style={{
                                    width: 320, height: 60, borderRadius: 15, backgroundColor: '#123078',
                                    marginVertical: 5

                                }}>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 25, }}>
                                        <Text style={{ color: "#ffffff", fontSize: 17, marginTop: -5, marginRight: 70 }}>Pay with Paypal</Text>
                                        <FontAwesome5 name="paypal" style={{ alignSelf: 'flex-end', marginLeft: 60, marginTop: -7 }} size={25} color="#ffffff" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <Text style={{ alignSelf: 'center', color: '#123078', margin: 10, fontSize: 16 }}>All purchases are secured</Text>


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
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: -30,
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