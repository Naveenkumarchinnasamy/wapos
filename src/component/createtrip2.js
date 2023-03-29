import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import GradientButton from '../utils/GradientButton';


export default class createtrip2 extends React.Component {
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


                        <View style={{ marginTop: wp('10%'), padding: 0 }}>
                            <View style={styles.col}>

                                <Image style={{ width: 75, height: 75, alignSelf: 'center', marginTop: -60, }} source={require('./../image/icon/editround.png')} />

                                <Text style={{ alignSelf: 'center', color: '#44c7f3', fontSize: 28, marginTop: 20, }}>Trip Summary</Text>

                                <View style={{ marginTop: wp('6%') }}>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Arival date at destination</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>12.01.2021 - 16:45 tel Aviv BGU</Text>
                                </View>

                                <View style={{ marginTop: wp('6%') }}>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Arival date back at origin</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>18.01.2021 - 12:15 New York NYU</Text>
                                </View>

                                <View style={{ marginTop: wp('10%') }}>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'left', marginLeft: 35, marginTop: 10, fontWeight: 'bold' }}>2 Items</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'left', marginTop: 10, marginLeft: 45 }}>Small: Less than 1KG</Text>
                                    <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'left', marginTop: 10, marginLeft: 45 }}>Big: More than 2KG</Text>
                                </View>

                                <GradientButton
                                    onPress={() => this.props.navigation.navigate('Search')}
                                    text={"Post the trip >"}
                                    color1={'#44c7f3'}
                                    color2={'#2a78bc'}
                                    marginTop={50}
                                    borderRadius={50}
                                    width={150}
                                    height={45}
                                />
                                {/* <GradientButton
                                    style={{ marginVertical: 8., marginTop: 50, alignSelf: 'center' }}
                                    text="Post the trip >"
                                    textStyle={{ fontSize: 17 }}
                                    gradientBegin="#44c7f3"
                                    gradientEnd="#2a78bc"
                                    gradientDirection="diagonal"
                                    height={45}
                                    width={150}
                                    radius={50}
                                    impact
                                    impactStyle='Light'
                                    onPressAction={() => this.props.navigation.navigate('Search')}
                                /> */}


                            </View>

                            <GradientButton
                                onPress={() => this.props.navigation.goBack(null)}
                                text={"Cancel"}
                                color1={'transparent'}
                                color2={'transparent'}
                                marginTop={50}
                                borderRadius={50}
                                width={150}
                                height={45}
                                borderWidth={2}
                                borderColor={'#44c7f3'}
                                textColor={'#44c7f3'}
                            />

                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 10, alignSelf: 'center', borderWidth: 2, borderColor: '#44c7f3', borderRadius: 50 }}
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