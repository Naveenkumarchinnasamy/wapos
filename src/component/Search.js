import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Search extends React.Component {
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

    componentDidMount = async () => {
        const CHECK = await AsyncStorage.getItem('currentUserID')

    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.openDrawer()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/menu.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: wp('0%'), padding: 0 }}>
                        <ScrollView>

                            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 25, marginTop: 0, }}>Welcome to the</Text>
                            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, fontWeight: 'bold' }}>world's largest shop</Text>

                            {/* <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '2%' }}></View>
                                <View style={styles.col}>
                                    <View style={{ width: '50%', borderRightColor: '#D9D9D9', borderRightWidth: 1 }}>
                                        <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: 'center' }} source={require('./../image/icon/airplane.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2d8ad0', textAlign: 'center', marginTop: 5 }}>134K</Text>
                                        <Text style={{ fontSize: 12, color: '#D9D9D9', textAlign: 'center' }}>Flights</Text>
                                    </View>
                                </View>
                                <View style={styles.col}>
                                    <View style={{ width: '50%', borderRightColor: '#D9D9D9', borderRightWidth: 1 }}>
                                        <Image style={{ width: 35, height: 35, marginTop: 15, alignSelf: 'center' }} source={require('./../image/icon/cart.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2d8ad0', textAlign: 'center', marginTop: 5 }}>23K</Text>
                                        <Text style={{ fontSize: 12, color: '#D9D9D9', textAlign: 'center' }}>Buyers</Text>
                                    </View>
                                </View>
                                <View style={{ width: '5%' }}></View>
                            </View> */}

                            {/* <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ width: '2%' }}></View>
                                <View style={styles.col}>
                                    <View style={{ width: '50%', borderRightColor: '#D9D9D9', borderRightWidth: 1 }}>
                                        <Image style={{ width: 35, height: 35, marginTop: 15, alignSelf: 'center' }} source={require('./../image/icon/user.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2d8ad0', textAlign: 'center', marginTop: 5 }}>17K</Text>
                                        <Text style={{ fontSize: 12, color: '#D9D9D9', textAlign: 'center' }}>Sellers</Text>
                                    </View>
                                </View>
                                <View style={styles.col}>
                                    <View style={{ width: '50%', borderRightColor: '#D9D9D9', borderRightWidth: 1 }}>
                                        <Image style={{ width: 35, height: 35, marginTop: 15, alignSelf: 'center' }} source={require('./../image/icon/dollar.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2d8ad0', textAlign: 'center', marginTop: 5 }}>3k</Text>
                                        <Text style={{ fontSize: 12, color: '#D9D9D9', textAlign: 'center' }}>Deals</Text>
                                    </View>
                                </View>
                                <View style={{ width: '5%' }}></View>
                            </View> */}

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('shopnow')}>
                                <Image style={{ width: 240, height: 240, marginTop: wp('45%'), alignSelf: 'center' }} source={require('./../image/icon/shopnow.png')} />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 18, color: '#a1a2a4', textAlign: 'center', marginTop: wp('15%'), marginBottom: 20 }}>Traveller? earn some money !</Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('tripdetail')} style={{ alignSelf: 'center' }}>
                                <ImageBackground source={require('./../image/fb_bg.png')} borderRadius={50} style={{ width: 280, height: 50 }} resizeMode='stretch'>
                                    <View style={{ width: 270, borderRadius: 100, flexDirection: 'row', padding: 15, }}>
                                        <Text style={{ color: "white", marginLeft: 80, marginTop: -5, fontSize: 20 }}>Post a trip</Text>
                                        <Image style={{ width: 25, height: 25, marginLeft: 40, marginTop: 3 }} source={require('./../image/icon/airplane_white.png')} />
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>

                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 0, alignSelf: 'center' }}
                                text="Post a trip"
                                textStyle={{ fontSize: 17 }}
                                gradientBegin="#44c7f3"
                                gradientEnd="#2a78bc"
                                gradientDirection="diagonal"
                                height={40}
                                width={280}
                                radius={50}
                                impact
                                impactStyle='Light'
                                onPressAction={() => this.props.navigation.navigate('createtrip')}
                            /> */}

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
        width: '45%', margin: 5, padding: 10, paddingTop: 25, paddingBottom: 25, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});