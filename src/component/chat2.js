import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("screen")
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { width, height, totalSize } from 'react-native-dimension';
import Toast from "react-native-toast-message";
import { FontAwesome, AntDesign, } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GradientButton from '../utils/GradientButton';

export default class chat2 extends React.Component {
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
            chat: [
                { id: 1 },
            ]

        };
    }

    renderChat = ({ item }) => {

        return (
            <View>
                <View style={{ flexDirection: 'row', marginRight: -30, marginBottom: 10 }}>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#44c7f3', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#ffffff'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: -30 }}>
                    <View style={{ width: '20%' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <Text style={{
                            backgroundColor: '#ffffff', shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,

                            padding: 10,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            color: '#000000'
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                </View>
            </View>
        )

    }


    render() {
        return (


            <ImageBackground source={require('./../image/icon/bgchat.png')} style={{ width: '100%', height: "100%" }} resizeMode='stretch'>
                {/* <KeyboardAwareScrollView style={{marginBottom:10}}> */}
                <View style={styles.container}>







                    <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>

                    </View>





                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={require('./../image/icon/usersample.png')} />
                        <Text style={{ textAlign: 'left', color: 'white', fontSize: 20, marginTop: 15, }}>Bernardo . F</Text>
                    </View>



                    <Text style={{ fontSize: 23, color: '#44c7f3', marginTop: Height / 12, marginBottom: Height / 50, textAlign: 'center' }}>Seller Commission</Text>


                    <View style={styles.col}>
                        <Text style={{ fontSize: 25, color: '#44c7f3', textAlign: 'center', marginTop: -12, fontWeight: 'bold' }}>Great !</Text>
                        <Text style={{ fontSize: 20, color: '#44c7f3', textAlign: 'center', marginTop: 5 }}>You both agreed on a</Text>
                        <Text style={{ fontSize: 20, color: '#868686', textAlign: 'center', marginTop: 5 }}>20$ sellers fee</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '50%' }}>
                                <View>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('great')}
                                        text={'Agreed'}
                                        color1={'#838b36'}
                                        color2={'#b5b355'}
                                        marginTop={30}
                                        borderRadius={50}
                                        width={120}
                                        height={40}
                                    />
                                    {/* <GradientButton
                                        style={{ marginTop: 30, marginLeft: 0, alignSelf: 'flex-end' }}
                                        text="Agreed"
                                        textStyle={{ fontSize: 17, fontWeight: '100' }}
                                        gradientBegin="#838b36"
                                        gradientEnd="#b5b355"
                                        gradientDirection="diagonal"
                                        height={40}
                                        width={120}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('great')}
                                    /> */}
                                </View>
                            </View>
                            <View style={{ width: '50%' }}>
                                <View>
                                    <GradientButton
                                        onPress={() => this.props.navigation.navigate('Chat')}
                                        text={'Cancel'}
                                        color1={'#838b36'}
                                        color2={'#b5b355'}
                                        marginTop={30}
                                        borderRadius={50}
                                        width={120}
                                        height={40}
                                    />
                                    {/* <GradientButton
                                        style={{ marginTop: 30, marginLeft: 0, alignSelf: 'flex-end', }}
                                        text="Cancel"
                                        textStyle={{ fontSize: 17, fontWeight: '100' }}
                                        gradientBegin="#ba0b06"
                                        gradientEnd="#e9492d"
                                        gradientDirection="diagonal"
                                        height={40}
                                        width={120}
                                        radius={50}
                                        impact
                                        impactStyle='Light'
                                        onPressAction={() => this.props.navigation.navigate('Chat')}
                                    /> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{ marginTop: 20 }}>
                            <FlatList
                                pagingEnabled
                                data={this.state.chat}
                                renderItem={this.renderChat}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </ScrollView>

                    <View style={{ marginTop: 0, height: hp("7.5%") }}>
                        <View style={{ flexDirection: 'row', borderRadius: 10, marginHorizontal: wp('2%'), position: "absolute", left: 0, bottom: 1 }}>

                            <View>
                                <TextInput
                                    placeholder={'Type a message'}
                                    style={{ backgroundColor: '#fff', borderRadius: 100, padding: 10, height: hp('7%'), width: wp('80%') }}
                                    onChangeText={message => this.setState({ message })}
                                    multiline={true}
                                    value={this.state.message}

                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: wp('3.5%') }}>

                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => console.log('HELLO')}>
                                        <FontAwesome
                                            name='paper-plane'
                                            type='font-awesome'
                                            color='#ffffff'
                                            size={22}
                                            containerStyle={{ width: width(10), }}
                                            style={{ backgroundColor: '#44c7f3', padding: 10, borderRadius: 50, marginLeft: -5 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View >

                {/* </KeyboardAwareScrollView> */}
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderColor: '#d9d9d9',
        borderWidth: 1,
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
        width: 100,
        height: 40,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 15,
        textAlign: 'center'
    },



    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        marginTop: -Height / 60,
        width: '90%',
        padding: Height / 100,
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
        alignSelf: 'center'
    }
});