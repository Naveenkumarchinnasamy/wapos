import React, { Profiler } from 'react';
import { AppRegistry, StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Search from './Search';
import Map from './map';
import Profile from './profile';
import Menu from './menu';

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: true,
            map: false,
            profile: false,
            menu: false,
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
                name='ios-time'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    ScreenView() {
        if (this.state.search) {
            return (
                <Search navigation={this.props.navigation} />
            )
        }
        else if (this.state.map) {
            return (
                <Map navigation={this.props.navigation} />
            )
        }
        else if (this.state.profile) {
            return (
                <Profile navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <Menu navigation={this.props.navigation} />
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>

                {this.ScreenView()}

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp('0%'), backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#b9b9b9', height: 45 }}>


                    <TouchableOpacity
                        onPress={() => this.setState({ search: true, map: false, profile: false, menu: false })}
                        style={{
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: wp('25%'),

                        }}>
                        {
                            this.state.search ?
                                <View style={{ backgroundColor: '#2145FE', width: '100%', height: 5, marginTop: -5, marginBottom:5 }}></View>
                                :
                                null
                        }
                        {
                            this.state.search ?
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab1.png')} />
                                :
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab1.1.png')} />

                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ search: false, map: true, profile: false, menu: false })}
                        style={{
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: wp('25%'),

                        }}>
                        {
                            this.state.map ?
                                <View style={{ backgroundColor: '#2145FE', width: '100%', height: 5, marginTop: -5 }}></View>
                                :
                                null
                        }

                        {
                            this.state.map ?
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab2.png')} />
                                :
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab2.2.png')} />

                        }

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ search: false, map: false, profile: true, menu: false })}
                        style={{
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: wp('25%'),

                        }}>
                        {
                            this.state.profile ?
                                <View style={{ backgroundColor: '#2145FE', width: '100%', height: 5, marginTop: -5 }}></View>
                                :
                                null
                        }

                        {
                            this.state.profile ?
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab3.png')} />
                                :
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab3.3.png')} />

                        }

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.setState({ search: false, map: false, profile: false, menu: true })}
                        style={{
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: wp('25%'),

                        }}>
                        {
                            this.state.menu ?
                                <View style={{ backgroundColor: '#2145FE', width: '100%', height: 5, marginTop: -5 }}></View>
                                :
                                null
                        }

                        {
                            this.state.menu ?
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab4.png')} />
                                :
                                <Image style={{ width: 25, height: 25, marginTop: 5 }} source={require('./../image/icon/tab4.4.png')} />

                        }
                    </TouchableOpacity>

                

                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    Picker: {
        width: wp('30%'),
        marginLeft: wp('40%'),

    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginTop: wp('2%'),
        marginBottom: wp('5%'),

    },
    text: {
        fontSize: 18,
        marginTop: wp('5%'),
        fontWeight: 'bold'
    },
    mainBox: {
        flexDirection: 'row',
        marginHorizontal: wp('6%'),

    },
    box: {
        backgroundColor: '#fff',
        width: wp('40%'),
        height: hp('20%'),
        marginRight: wp('7%'),
        marginBottom: wp('7%'),
    },
    offer: {
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%'),
        color: '#666666',
        fontSize: 12
    },
    number: {
        marginHorizontal: wp('5%'),
        color: '#5f5d70',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#00cb9c',
        borderRadius: wp('10%'),
        height: 50,
        marginHorizontal: wp('10%')
    },
    buttonText: {

        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },

    userList: {
        padding: 8,
        backgroundColor: '#fff',
        borderBottomColor: '#B9B9B9',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 16,
        marginTop: wp('2%'),
        color: '#000',
    },
    desc: {
        fontSize: 13,
        color: '#B9B9B9',
    }, desc2: {
        fontSize: 13,
        color: '#B9B9B9',
    },
    image: {
        width: 60,
        height: 60,
        marginTop: wp('1%'),
        marginRight: wp('3%'),
        borderRadius: 10,
        marginLeft: wp('1%')
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 55,
        bottom: 10,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});