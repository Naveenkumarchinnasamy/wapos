import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("screen")
const { height: Height2 } = Dimensions.get("window")
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';
import { Base_URL_IMAGE } from '../api/constants';

export default class shopnow2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: this.props.navigation.state.params.PRODUCT_NAME,
            uri: this.props.navigation.state.params.PRODUCT_IMAGE,
            countryName: this.props.navigation.state.params.COUNTRY_NAME,
            shopName: '',
            data:null
        };
    }
componentDidMount(){
    if(this.props.navigation.state.params!=undefined){
        const {editdata} = this.props.navigation.state.params;
        if(editdata!=null){
        this.setState({data:editdata,shopName:editdata.shop_name});
        }
         }
}
    move() {

        const { productName, uri, countryName, shopName } = this.state;

        if (shopName === "") {
            Alert.alert("Empty Field!", "Please enter your shop name");
            return;
        }

        this.props.navigation.navigate('shopnow3', { PRODUCT_NAME: productName, PRODUCT_IMAGE: uri, COUNTRY_NAME: countryName, SHOP_NAME: shopName,editdata:this.state.data,updateimg:this.props.navigation.state.params.updateimg })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header onPress={() => this.props.navigation.goBack(null)} />

                    <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 25, fontWeight: 'bold', marginTop: wp(5), marginBottom: 15 }}>I would like to buy</Text>
                    <Image style={{ width: "95%", height: Height / 15, marginBottom: hp(3), alignSelf: 'center' }} source={require('../../assets/images/icon/up/step4.jpg')} />

                    <View style={styles.col}>
                        <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), marginTop: wp('0%'), textAlign: 'left' }}>Any praticular shop?</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '80%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Shop name'}
                                        value={this.state.shopName}
                                        onChangeText={shopName => this.setState({ shopName })}
                                    />
                                    <FontAwesome5 name="search" style={{ marginLeft: wp(5) }} size={16} color="#e1e1e1" />
                                </View>
                            </View>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'flex-end', paddingTop: wp(3) }}>
                                <TouchableOpacity style={{ marginRight: wp(4), backgroundColor: '#44c7f3', borderRadius: 100, height: 33, width: 33, justifyContent: 'center' }}>
                                    <FontAwesome5 name="plus" style={{ marginLeft: 0, alignSelf: 'center' }} size={16} color="#ffffff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: hp(18), width: '77%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                            {this.props.navigation.state.params.updateimg==true?
                        <Image resizeMode='contain' style={{ width: 100, height: 100, alignSelf: 'center'}} source={{ uri: this.state.uri }} />
                        :<Image resizeMode='contain' style={{ width: 100, height: 100, alignSelf: 'center'}} source={{ uri: Base_URL_IMAGE+this.state.uri }} />
                          }
                          <Text numberOfLines={2} style={{ color: "#44c7f3", fontSize: 16 }}>{this.state.productName}</Text>
                            </View>
                        </View>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', height: hp(18), width: '77%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/flag.png')} />
                                <Text numberOfLines={2} style={{ width: wp(20), color: "#a1a2a4", fontSize: 18, alignSelf: 'center' }}>{this.state.countryName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: hp(5) }}></View>
                </ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <GradientButton
                            onPress={() => this.props.navigation.goBack(null)}
                            text={"Back"}
                            color1={'transparent'}
                            color2={'transparent'}
                            borderRadius={50}
                            width={wp(45)}
                            height={45}
                            borderWidth={2}
                            borderColor={'#44c7f3'}
                            textColor={'#44c7f3'}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <GradientButton
                            onPress={() => this.move()}
                            text={"Next"}
                            color1={'#44c7f3'}
                            color2={'#2a78bc'}
                            borderRadius={50}
                            width={wp(45)}
                            height={45}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfe'
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
        alignItems: 'center',
        marginTop: 15,
        width: wp(70),
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderColor: '#e1e1e1',
        borderWidth: 2,
        padding: 5,
        marginLeft: wp(5)
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
        width: '77%',
        paddingLeft: 10,
        padding: 5,
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

        paddingTop: hp(3),
        paddingBottom: hp(3),
        marginTop: Height / 100,

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