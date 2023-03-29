import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, Picker, Switch, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import GradientButton from '../utils/GradientButton';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
    "window"
);


let Act = [
    { title: "BIG", sub: "More than 2KG", active: true },
    { title: "MEDIUM", sub: "1KG - 2KG", active: false },
    { title: "SMALL", sub: "Up to 1KG", active: false },
]

export default class createtrip1 extends React.Component {
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
            isSwitchOn: false,
            driverActiveStatus: true

        };
    }

    ToActive = (j) => {
        console.log(j)

        var all = Act
        for (var k = 0; k <= all.length - 1; k++) {
            all[k].active = false
        }

        all[j].active = true

        Act = all

        this.setState({ loading: false })

        if (j == 0) {
            this.setState({ gender: 'Male' });

        }
        else if (j == 1) {
            this.setState({ gender: 'Female' });

        }
        else if (j == 2) {
            this.setState({ gender: 'Other' });

        } else {
            null
        }



    }
    onChangeFunction(data) {
        if (data == true) {
            this.setState({ driverActiveStatus: false });
        } else if (data == false) {
            this.setState({ driverActiveStatus: true });
        }
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

                                <Text style={{ fontSize: 15, color: '#44c7f3', textAlign: 'left', marginLeft: 30, marginTop: 10, marginBottom: 20 }}>How many offers are you willing to accept?</Text>

                                <View style={styles.firstInput}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 0, backgroundColor: '#ffffff', borderColor: '#ffffff', borderWidth: 1, padding: 10, borderRadius: 100 }}>
                                        <Picker style={{ height: 30, color: '#000000', width: '100%', height: 30, }}
                                            selectedValue={this.state.gender}
                                            onValueChange={(itemValue) =>
                                                this.setState({ gender: itemValue })}>
                                            <Picker.Item label="Choose number" value="" />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                        </Picker>
                                    </View>

                                </View>

                                <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'left', marginLeft: 30, marginTop: 20, marginBottom: 20 }}>Item Type?</Text>

                                <View style={{
                                    marginTop: '2%',
                                    marginLeft: 35
                                }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        {
                                            Act.map((v, j) => {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            this.ToActive(j)
                                                        }}
                                                        style={[{
                                                            paddingHorizontal: 5,
                                                            paddingVertical: 5,
                                                            borderWidth: 1,
                                                            borderRadius: 9,
                                                            borderColor: '#44c7f3',
                                                            marginRight: viewportWidth * (5 / 100)

                                                        }, v.active ? { backgroundColor: "#44c7f3", } : null]}>
                                                        <View style={{ padding: 10 }}>
                                                            <Text style={{ color: v.active ? "#ffffff" : "#44c7f3", fontWeight: 'bold', fontSize: 12, textAlign: 'center', fontFamily: 'RR' }}>{v.title}</Text>
                                                            <Text style={{ color: v.active ? "#ffffff" : "#a1a2a4", fontSize: 10, textAlign: 'center', fontFamily: 'RR' }}>{v.sub}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', padding: 30, marginTop: 20, marginBottom: -30 }}>
                                    <View style={{ width: '10%' }}>
                                        <Switch
                                            style={styles.switchAlignStyle}
                                            value={this.state.driverActiveStatus}
                                            trackColor={{ false: "#44c7f3", true: "#44c7f3" }}
                                            thumbColor={this.state.driverActiveStatus ? "#ffffff" : "#ffffff"}
                                            onValueChange={() => {
                                                this.onChangeFunction(this.state.driverActiveStatus);
                                            }}
                                        />
                                    </View>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ paddingLeft: 10, paddingTop: 3, color: '#000', fontSize: 16 }}>Willing to accept Fragile packages</Text>
                                    </View>
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
                                            onPress={() => this.props.navigation.navigate('createtrip2')}
                                            text={"Cancel"}
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
                                            onPressAction={() => this.props.navigation.navigate('createtrip2')}
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