import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";

import GradientButton from '../utils/GradientButton';

export default class createtrip extends React.Component {
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
                <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>
                        <View style={{ width: '30%', flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50, alignSelf: 'flex-end' }} source={require('./../image/icon/searchround.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ width: 50, height: 50, alignSelf: 'flex-end' }} source={require('./../image/icon/planeround.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: wp('0%'), padding: 0 }}>
                        <ScrollView>

                            <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 35, fontWeight: 'bold', marginTop: 10, }}>Trip Details</Text>

                            <View style={{ marginTop: wp('30%') }}>

                                <Text style={{ color: "#88888B", fontSize: 15, fontWeight: 'bold', marginLeft: wp('9%'), marginTop: wp('6%'), textAlign: 'left' }}>TICKET NUMBER</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Ticket number'}
                                        value={this.state.Password}
                                        onChangeText={Password => this.setState({ Password })}
                                    />
                                    <Image style={{ width: 20, height: 20, marginTop: 10, marginLeft: -10 }} source={require('./../image/icon/loupe.png')} />
                                </View>

                                <View style={{ marginTop: wp('15%') }}>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Arival date at destination</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>12.01.2021 - 16:45 tel Aviv BGU</Text>
                                </View>

                                <View style={{ marginTop: wp('6%') }}>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Arival date back at origin</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>18.01.2021 - 12:15 New York NYU</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                                    <View style={{ width: '50%' }}>
                                        <GradientButton
                                            onPress={() => this.props.navigation.goBack(null)}
                                            text={"Cancel"}
                                            color1={'transparent'}
                                            color2={'transparent'}
                                            marginTop={10}
                                            borderRadius={50}
                                            width={150}
                                            height={45}
                                        />
                                        {/* <GradientButton
                                            style={{ marginVertical: 8., marginTop: 10, alignSelf: 'flex-end', borderWidth: 2, borderColor: '#44c7f3', borderRadius: 50 }}
                                            text="Cancel"
                                            textStyle={{ fontSize: 17, color: '#44c7f3' }}
                                            gradientBegin="transparent"
                                            gradientEnd="transparent"
                                            gradientDirection="diagonal"
                                            height={45}
                                            width={150}
                                            radius={50}
                                            impact
                                            impactStyle='Light'
                                            onPressAction={() => this.props.navigation.goBack(null)}
                                        /> */}
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <GradientButton
                                            onPress={() => this.props.navigation.navigate('createtrip1')}
                                            text={"Next"}
                                            color1={'#44c7f3'}
                                            color2={'#2a78bc'}
                                            marginTop={10}
                                            borderRadius={50}
                                            width={150}
                                            height={45}
                                        />
                                        {/* <GradientButton
                                            style={{ marginVertical: 8., marginTop: 10, alignSelf: 'flex-start' }}
                                            text="Next"
                                            textStyle={{ fontSize: 17 }}
                                            gradientBegin="#44c7f3"
                                            gradientEnd="#2a78bc"
                                            gradientDirection="diagonal"
                                            height={45}
                                            width={150}
                                            radius={50}
                                            impact
                                            impactStyle='Light'
                                            onPressAction={() => this.props.navigation.navigate('createtrip1')}
                                        /> */}

                                    </View>
                                </View>

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
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#e1e1e1',
        borderWidth: 2,
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