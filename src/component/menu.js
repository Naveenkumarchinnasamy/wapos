import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, BackHandler, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as Device from 'expo-device';
var radio_props = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
];
export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image: '',
            uri: '',
            srcImg: '',
            loading: false
        };
    }

    logout = () => {

        let DEVICEID = Device.osInternalBuildId;

    }

    disableBackButton = () => {
        return true;
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%'), padding: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '80%' }}>
                                <Image style={styles.logo} source={require('./../image/icon/menutext.png')} />
                            </View>

                            <View style={{ width: '10%', marginLeft: 10, marginRight: 10 }}>
                                <TouchableOpacity>
                                    <Image style={styles.search} source={require('./../image/icon/setting.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', borderBottomColor: '#eaeaea', borderBottomWidth: 1, height: 90, marginBottom: 20 }}>
                            <View style={{ width: '30%' }}>
                                {this.state.image == null || this.state.image == 'null' ?
                                    <Image style={styles.profile} source={require('./../image/icon/profileimg.png')} />

                                    :
                                    <Image style={styles.profile} source={{ uri: 'http://spot.tradingdevelopmentsystem.com/' + this.state.image }} />
                                }
                            </View>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5 }}>{this.state.name}</Text>
                                <Text style={{ fontSize: 16, color: '#8f92a1' }}>{this.state.email}</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('#')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/home.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Home</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('notification')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/notification.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Notifications</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('Terms')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/term.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('Help')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/help.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Help & Feedback</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('Chatlist')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/chat.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Chat</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity style={styles.block} onPress={() => this.props.navigation.navigate('About')}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/about.png')} />
                                        <Text style={{ fontSize: 15, padding: 10, marginTop: -40, fontWeight: 'bold' }}>About Us</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('setting')} style={styles.block}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/setting.png')} />
                                        <Text style={{ fontSize: 17.5, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Settings</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <TouchableOpacity onPress={() => this.logout()} style={styles.block}>
                                        <Image style={styles.icon} source={require('./../image/icon/menu/logout.png')} />
                                        <Text style={{ fontSize: 18, padding: 10, marginTop: -40, fontWeight: 'bold' }}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 70 }}></View>

                    </ScrollView>
                </View>


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
        width: 80,
        height: 30,
        marginBottom: wp('10%')
    },
    search: {
        width: 40,
        height: 40,
        marginBottom: wp('10%')
    },
    icon: {
        width: 26,
        height: 26,
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
        marginBottom: wp('10%'),
        borderRadius: 50
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