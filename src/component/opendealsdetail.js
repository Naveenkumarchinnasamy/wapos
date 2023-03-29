import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ImageBackground, Alert, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getOpenDealSingle } from '../api/helper';
import Header from '../utils/Header';
import { Base_URL_IMAGE } from '../api/constants';

export default class opendealsdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ITEM_ID: this.props.navigation.state.params.ITEM_ID,
            dealDetails: [],
            loader: false
        };
    }

    componentDidMount = async () => {
        this.singleDeal()
    }

    singleDeal = async () => {

        this.setState({ loader: true })

        getOpenDealSingle(this.state.ITEM_ID)
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.message == "Successful") {
                    this.setState({ loader: false })
                    this.setState({ dealDetails: responseJson.data })
                    return;
                } else {
                    this.setState({ loader: false })
                    alert(JSON.stringify(responseJson))
                    // Alert.alert("404", "Something went wrong please try in a while.")
                    return;
                }

            })
            .catch((error) => {
                this.setState({ loader: false })
                console.log(error)
            })
    }

    render() {
        if (this.state.loader == true) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={'#44c7f3'} size={'large'} />
                    <Text style={{ color: '#000000', fontSize: 18, marginTop: 10 }}>Please Wait</Text>
                </View>
            )
        }
        const { dealDetails } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header onPress={() => this.props.navigation.goBack(null)} isHide={true} />

                    <View>

                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, marginTop: hp(-16), }}>Open deals</Text>

                        <View style={{ marginTop: hp(12) }}>

                            <View style={styles.col}>

                                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
                                        <Image style={{ width: 70, height: 70, alignSelf: 'center' }} source={require('./../image/icon/userp.jpg')} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 21, color: '#44c7f3', textAlign: 'center', marginTop: 20, marginLeft: 20 }}>{dealDetails.product_name}</Text>
                                </View>

                                <Image resizeMode='contain' style={{ width: 150, height: 150, alignSelf: 'center' }} source={{ uri: Base_URL_IMAGE + dealDetails.product_image }} />
                                <Text style={{ fontSize: 17, color: '#44c7f3', textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>{dealDetails.product_name}</Text>

                                <View style={{ marginTop: wp('3%'), }}>
                                    <Text style={{ fontSize: 20, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>{dealDetails.currency_type} {dealDetails.product_price}</Text>
                                    <Text style={{ fontSize: 22, color: '#44c7f3', textAlign: 'center', marginTop: 10 }}>Available at</Text>
                                    <Text style={{ fontSize: 15, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>{dealDetails.country_name}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 30 }}>
                                    <View style={{ width: '33.3%', borderRightWidth: 1, borderRightColor: '#d9d9d9' }}>
                                        <Text style={{ fontSize: 18, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>Your fee</Text>
                                        <Text numberOfLines={2} style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 10, }}>{dealDetails.currency_type} {dealDetails.seller_fee}</Text>
                                    </View>
                                    <View style={{ width: '33.3%', borderRightWidth: 1, borderRightColor: '#d9d9d9' }}>
                                        <Text style={{ fontSize: 18, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>Purchased</Text>
                                        <View style={{ marginTop: 10 }}>
                                            {/* <CheckBox
                                                value={this.state.isSelected}
                                                onValueChange={(value) => this.setState({ isSelected: value })}
                                                style={styles.checkbox}
                                            /> */}
                                        </View>
                                    </View>
                                    <View style={{ width: '33.3%' }}>
                                        <Text style={{ fontSize: 18, color: '#a1a2a4', textAlign: 'center', marginTop: 0, }}>Deliverd</Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('deliver')} style={{ marginTop: 10 }}>
                                            {/* <CheckBox
                                                value={this.state.isSelected2}
                                                onValueChange={(value) => this.setState({ isSelected2: value })}
                                                style={styles.checkbox}
                                                disabled={true}
                                            /> */}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
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
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginTop: -5
    },
});