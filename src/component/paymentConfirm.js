import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';

export default class paymentConfirm extends React.Component {
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
                    <ScrollView>
                        <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                            <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: wp('10%'), padding: 0 }}>


                            <View style={styles.col}>

                                <Text style={{ fontSize: 22, color: '#44c7f3', textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Payment confirmed !</Text>

                                <View style={{ marginBottom: 0 }}>
                                    <Image style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20 }} source={require('./../image/icon/usersample.png')} />
                                </View>

                                <Text style={{ fontSize: 25, color: '#44c7f3', textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Playstation 4 1 TB</Text>
                                <Text style={{ fontSize: 20, color: '#44c7f3', textAlign: 'center', marginTop: 5 }}>Shipping to:</Text>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: 20, }}>Bilbo begins</Text>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: 0, }}>Avenue usa 87662</Text>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: 0, }}>Normal delivery by:</Text>
                                <Text style={{ fontSize: 18, color: '#868686', textAlign: 'center', marginTop: 0, }}>24/5/20</Text>


                                <View>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('track')}
                                        text={"Confirm"}
                                        color1={'#44c7f3'}
                                        color2={'#2a78bc'}
                                        marginTop={30}
                                        borderRadius={10}
                                        width={200}
                                        height={50}
                                    />
                                    {/* <GradientButton
                                        style={{ marginTop: 30, alignSelf: 'flex-start', alignSelf: 'center' }}
                                        text="Confirm"
                                        textStyle={{ fontSize: 17 }}
                                        gradientBegin="#44c7f3"
                                        gradientEnd="#2a78bc"
                                        gradientDirection="diagonal"
                                        height={45}
                                        width={200}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('track')}
                                    /> */}
                                </View>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('track')}>
                                    <Text style={{ fontSize: 22, color: '#44c7f3', textAlign: 'center', marginTop: 15 }}>Track order</Text>
                                </TouchableOpacity>


                                <Text style={{ fontSize: 14, color: '#868686', textAlign: 'center', marginTop: 30, marginLeft: 30, marginRight: 30 }}>You can always track your order from the orders section of the main menu</Text>

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