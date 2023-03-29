import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';

export default class great1 extends React.Component {
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

                                <Text style={{ fontSize: 30, color: '#44c7f3', textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Great !</Text>
                                <Text style={{ fontSize: 20, color: '#868686', textAlign: 'center', marginTop: 5 }}>You have agreed to delivery a Playstation 4 to</Text>



                                <View style={{ marginBottom: 30 }}>
                                    <Image style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20 }} source={require('./../image/icon/usersample.png')} />
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 20, marginLeft: 20 }}>Bilbo begins</Text>
                                </View>


                                <View style={{ flexDirection: 'row', marginTop: 0, marginBottom: 30 }}>
                                    <View style={{ width: '50%', borderRightWidth: 1, borderRightColor: '#d9d9d9' }}>
                                        <Image style={{ width: 70, height: 70, alignSelf: 'center', marginTop: 0 }} source={require('./../image/icon/great1.jpg')} />
                                        <Text style={{ fontSize: 16, color: '#868686', textAlign: 'center', marginTop: 10, }}>4593 Westwood Avenue USA</Text>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Image style={{ width: 70, height: 70, alignSelf: 'center', marginTop: 0 }} source={require('./../image/icon/great2.jpg')} />
                                        <Text style={{ fontSize: 16, color: '#868686', textAlign: 'center', marginTop: 10, }}>Playstation 4: <Text style={{ color: '#44c7f3' }}>200$</Text></Text>
                                        <Text style={{ fontSize: 16, color: '#868686', textAlign: 'center', marginTop: 0, }}>Your fee: <Text style={{ color: '#44c7f3' }}>20$</Text></Text>
                                    </View>
                                </View>

                                <View>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('card1')}
                                        text={"Add to my open deals"}
                                        color1={'#44c7f3'}
                                        color2={'#2a78bc'}
                                        marginTop={10}
                                        borderRadius={50}
                                        width={250}
                                        height={45}
                                    />
                                    {/* <GradientButton
                                        style={{ marginVertical: 8., marginTop: 10, alignSelf: 'flex-start', alignSelf: 'center' }}
                                        text="Add to my open deals"
                                        textStyle={{ fontSize: 17 }}
                                        gradientBegin="#44c7f3"
                                        gradientEnd="#2a78bc"
                                        gradientDirection="diagonal"
                                        height={45}
                                        width={250}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('card1')}
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