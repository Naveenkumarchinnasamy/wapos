import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("screen")
const { height: Height2 } = Dimensions.get("window")
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";

import { Picker } from '@react-native-picker/picker';
import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';
import { Base_URL_IMAGE } from '../api/constants';

export default class shopnow3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: this.props.navigation.state.params.PRODUCT_NAME,
            uri: this.props.navigation.state.params.PRODUCT_IMAGE,
            countryName: this.props.navigation.state.params.COUNTRY_NAME,
            shopName: this.props.navigation.state.params.SHOP_NAME,
            itemCostCurrency: '',
            itemCost: '',
            itemQuantity: '',
            data:null
        };
    }
    componentDidMount(){
        if(this.props.navigation.state.params!=undefined){
            const {editdata} = this.props.navigation.state.params;
            if(editdata!=null){
            this.setState({data:editdata,itemCost:editdata.product_price,
                           itemQuantity:editdata.product_quantity.toString(),
                        itemCostCurrency:editdata.currency_type});
            }
             }
    }
    move() {

        const { productName, uri, countryName, shopName, itemCostCurrency, itemCost, itemQuantity } = this.state;

        const ITEM_COST_CURRENCY = itemCostCurrency == "" ? "USD" : itemCostCurrency

        if (itemCost === "") {
            Alert.alert("Empty Field!", "Please enter your item cost");
            return;
        } else if (itemQuantity == 0 || itemQuantity == "") {
            Alert.alert("Empty Field!", "Please enter your item quanatity");
            return;
        } else {
            const ITEM_PRICE = parseInt(itemCost) * parseInt(itemQuantity)
            this.props.navigation.navigate('shopnow4', { PRODUCT_NAME: productName, PRODUCT_IMAGE: uri, COUNTRY_NAME: countryName, SHOP_NAME: shopName, ITEM_COST_CURRENCY: ITEM_COST_CURRENCY, ITEM_COST: ITEM_PRICE, ITEM_QUANTITY: itemQuantity,editdata:this.state.data,
                updateimg:this.props.navigation.state.params.updateimg })
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header onPress={() => this.props.navigation.goBack(null)} />

                    <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 25, fontWeight: 'bold', marginTop: wp(5), marginBottom: 15 }}>I would like to buy</Text>
                    <Image style={{ width: "95%", height: Height / 15, marginBottom: hp(3), alignSelf: 'center' }} source={require('../../assets/images/icon/up/step55.png')} />


                    <View style={styles.col}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ width: '50%', justifyContent: 'center' }}>
                                <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), textAlign: 'left' }}>Product price</Text>
                            </View>
                            <View style={{ width: "50%", alignItems: 'flex-end', paddingRight: 10, justifyContent: 'center', backgroundColor: '##fffff', borderColor: '#ffffff', borderWidth: 1, borderRadius: 100, }}>
                                <Picker mode="dropdown" style={{ height: 30, color: '#44c7f3', width: wp(30), fontWeight: 'bold', fontSize: 20, marginTop: 4 }}
                                    selectedValue={this.state.itemCostCurrency}
                                    onValueChange={(itemValue) =>
                                        this.setState({ itemCostCurrency: itemValue })}>
                                    <Picker.Item label="USD" value="USD" />
                                    <Picker.Item label="EUR" value="EUR" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.firstInput}>
                            <TextInput
                                style={[styles.input, { paddingLeft: 15 }]}
                                placeholder={'how much the item will cost?'}
                                value={this.state.itemCost}
                                onChangeText={itemCost => this.setState({ itemCost })}
                                keyboardType={'phone-pad'}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), marginTop: wp(2), textAlign: 'left' }}>Quantity</Text>
                            <View style={[styles.firstInput, { borderRadius: 20, borderColor: '#D9D9D9' }]}>
                                <TextInput
                                    style={[styles.input, { width: 35, height: 17, padding: 0, paddingLeft: 10 }]}
                                    placeholder={'0'}
                                    value={this.state.itemQuantity}
                                    onChangeText={itemQuantity => this.setState({ itemQuantity })}
                                    maxLength={2}
                                    keyboardType='phone-pad'
                                />
                            </View>
                        </View>

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: hp(3), alignItems: 'center', marginBottom: hp(10) }}>
                        <View style={{ width: '29%', justifyContent: 'center', alignItems: 'center', marginLeft: wp(3.2) }}>
                            <View style={{ height: hp(18), width: '100%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                            {this.props.navigation.state.params.updateimg==true?
                        <Image resizeMode='contain' style={{ width: 80, height: 80, alignSelf: 'center'}} source={{ uri: this.state.uri }} />
                        :<Image resizeMode='contain' style={{ width: 80, height: 80, alignSelf: 'center'}} source={{ uri: Base_URL_IMAGE+this.state.uri }} />
                          } 
                          <Text numberOfLines={2} style={{ color: "#44c7f3", fontSize: 16 }}>{this.state.productName}</Text>
                            </View>
                        </View>
                        <View style={{ width: '29%', justifyContent: 'center', alignItems: 'center', marginLeft: wp(3.2) }}>
                            <View style={{ flexDirection: 'row', height: hp(18), width: '100%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/flag.png')} />
                                <Text style={{ color: "#a1a2a4", fontSize: 18, alignSelf: 'center' }}>USA</Text>
                            </View>
                        </View>
                        <View style={{ width: '29%', justifyContent: 'center', alignItems: 'center', marginLeft: wp(3.2) }}>
                            <View style={{ height: hp(18), width: '100%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <Image resizeMode='contain' style={{ width: 50, height: 50, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/shop.png')} />
                                <Text numberOfLines={2} style={{ color: "#44c7f3", fontSize: 16, marginTop: hp(2) }}>{this.state.shopName}</Text>
                            </View>
                        </View>
                    </View>

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

                {/* <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View> */}
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
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 30,
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
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 14
    },



    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',

        paddingTop: hp(2),
        paddingBottom: hp(2),
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