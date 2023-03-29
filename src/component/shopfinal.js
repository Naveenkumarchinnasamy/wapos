import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';

export default class shopfinal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: this.props.navigation.state.params.PRODUCT_NAME,
            uri: this.props.navigation.state.params.PRODUCT_IMAGE,
            countryName: this.props.navigation.state.params.COUNTRY_NAME,
            shopName: this.props.navigation.state.params.SHOP_NAME,
            itemCostCurrency: this.props.navigation.state.params.ITEM_COST_CURRENCY,
            itemCost: this.props.navigation.state.params.ITEM_COST,
            itemQuantity: this.props.navigation.state.params.ITEM_QUANTITY,
            comment: this.props.navigation.state.params.COMMENT,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header isHide={true} onPress={() => this.props.navigation.goBack(null)} />

                    <View style={{ marginTop: hp(-17) }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: hp(2) }}>I would like to buy</Text>
                        <View>
                            <Image style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 20 }} source={{ uri: this.state.uri }} />
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#44c7f3', textAlign: 'center', marginTop: hp(2) }}>{this.state.productName}</Text>
                        </View>

                        <View style={{ marginTop: wp('5%'), padding: 0 }}>

                            <View style={{
                                flexDirection: 'row', backgroundColor: '#ffffff', shadowColor: "#000",
                                elevation: 6,
                                padding: 15,
                                margin: 20,
                                borderRadius: 30
                            }}>
                                <View style={{ width: '15%' }}>
                                    <Image style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/flag.png')} />
                                </View>
                                <View style={{ width: '85%' }}>
                                    <Text style={{ color: "#a1a2a4", fontSize: 20, alignSelf: 'center' }}>{this.state.countryName}</Text>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row', backgroundColor: '#ffffff', shadowColor: "#000",
                                elevation: 6,
                                padding: 15,
                                margin: 20,
                                borderRadius: 30,
                                marginTop: -5
                            }}>
                                <View style={{ width: '15%' }}>
                                    <Image style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/shop.png')} />
                                </View>
                                <View style={{ width: '85%' }}>
                                    <Text style={{ color: "#a1a2a4", fontSize: 20, alignSelf: 'center' }}>{this.state.shopName}</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 25, color: '#44c7f3', marginTop: 30, textAlign: 'center', }}>Price: <Text style={{ fontWeight: 'bold' }}>{this.state.itemCost} {this.state.itemCostCurrency}</Text></Text>

                        </View>

                    </View>

                </ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <GradientButton
                            onPress={() => this.props.navigation.goBack(null)}
                            text={"Find Sellers"}
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
                            onPress={() => this.props.navigation.navigate('adisonline')}
                            text={"Find Sellers"}
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