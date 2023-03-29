import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import { height } from 'react-native-dimension';
import GradientButton from '../utils/GradientButton';

export default class deliver extends React.Component {
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
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '110%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ alignSelf: 'center', fontSize: 33, fontWeight: 'bold', color: '#ffffff', marginTop: 20, marginBottom: 0, textAlign: 'center' }}>Ordered deliverd{'\n'}to UPS</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 15, color: '#ffffff', marginTop: 0, marginBottom: 50, textAlign: 'center' }}>Play station 4</Text>

                    <ScrollView>
                        <View style={{ marginTop: wp('12%'), padding: 0 }}>

                            <View>
                                <Text style={{ fontSize: 20, color: '#868686', textAlign: 'center', marginTop: 15, padding: 10, marginLeft: 20, marginRight: 20 }}>I Hereby to confirm that Mr.Bernardo Bertolmio has deliverd a PS4 to be delivered to:</Text>
                                <Text style={{ fontSize: 20, color: '#868686', textAlign: 'center', marginTop: 15, padding: 10, marginLeft: 20, marginRight: 20 }}>Ofer Monar{'\n'}21 Rothchild, Ness Ziona{'\n'}740706</Text>
                            </View>

                            <Image style={{ width: 200, height: 100, alignSelf: 'center', backgroundColor: '#ffffff', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#44c7f3', marginTop: 20 }} source={require('../../assets/images/barcode.png')} />
                            <View>
                                <GradientButton
                                    onPress={() => this.props.navigation.navigate('Search')}
                                    text={"Confirm delivery"}
                                    color1={'#44c7f3'}
                                    color2={'#2a78bc'}
                                    marginTop={40}
                                    borderRadius={50}
                                    width={200}
                                    height={45}
                                />
                                {/* <GradientButton
                                    style={{ marginVertical: 8., marginTop: 40, alignSelf: 'flex-start', alignSelf: 'center' }}
                                    text="Confirm delivery"
                                    textStyle={{ fontSize: 17 }}
                                    gradientBegin="#44c7f3"
                                    gradientEnd="#2a78bc"
                                    gradientDirection="diagonal"
                                    height={45}
                                    width={200}
                                    radius={50}
                                    impact
                                    impactStyle='Light'
                                    onPressAction={() => this.props.navigation.navigate('Search')}
                                /> */}
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