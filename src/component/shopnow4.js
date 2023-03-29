import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("screen")
const { height: Height2 } = Dimensions.get("window")
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Base_URL_IMAGE } from '../api/constants';
import { postItemType, postAD,UpdateAD } from '../api/helper';
import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';

export default class shopnow4 extends React.Component {
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
            comment: '',
            itemHeight: '',
            itemWidth: '',
            itemLength: '',
            itemWeight: '',
            sellerFee: '',
            loader: false,
            data:null
        };
    }
    componentDidMount(){
        if(this.props.navigation.state.params!=undefined){
            const {editdata} = this.props.navigation.state.params;
            if(editdata!=null){
            this.setState({data:editdata,comment:editdata.comments,
                           itemHeight:editdata.item_type.height==null?editdata.item_type.height:editdata.item_type.length.toString(),
                           itemWidth:editdata.item_type.width==null?editdata.item_type.width:editdata.item_type.width.toString(),
                           itemLength:editdata.item_type.length==null?editdata.item_type.length:editdata.item_type.length.toString(),
                           itemWeight:editdata.item_type.weight.toString(),
                           sellerFee:editdata.seller_fee});
            }
             }
    }
    move() {

        const { productName, uri, countryName, shopName, itemCostCurrency, itemCost, itemQuantity, comment, itemHeight, itemWidth, itemLength, itemWeight, sellerFee } = this.state;

        if (comment === "") {
            Alert.alert("Empty Field!", "Please enter your comment");
            return;
        } else if (itemHeight == "" || itemHeight == 0) {
            Alert.alert("Empty Field!", "Please enter your item height");
            return;
        } else if (itemWidth == "" || itemWidth == 0) {
            Alert.alert("Empty Field!", "Please enter your item width");
            return;
        } else if (itemLength == "" || itemLength == 0) {
            Alert.alert("Empty Field!", "Please enter your item length");
            return;
        } else if (itemWeight == "" || itemWeight == 0) {
            Alert.alert("Empty Field!", "Please enter your item weight");
            return;
        } else if (sellerFee == "" || sellerFee == 0) {
            Alert.alert("Empty Field!", "Please enter your seller fee");
            return;
        }

        this.setState({ loader: true })
        postItemType(productName, itemHeight, itemWidth, itemLength, itemWeight, itemQuantity)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.message == "Post data successfully.") {
                    this.postData(responseJson.data.id);
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

    postData = async (ITEM_ID) => {
if(this.state.data==null){
        const { productName, uri, countryName, shopName, itemCostCurrency, itemCost, itemQuantity, comment, sellerFee } = this.state;
        const ITEM_COST_CURRENCY = itemCostCurrency == "" ? "USD" : itemCostCurrency

        postAD(productName, uri, countryName, shopName, itemCost, ITEM_COST_CURRENCY, itemQuantity, comment, ITEM_ID, sellerFee)
            .then((response) => response.json())
            .then((responseJson) => {

                // this.props.navigation.navigate('shopfinal', { PRODUCT_NAME: productName, PRODUCT_IMAGE: uri, COUNTRY_NAME: countryName, SHOP_NAME: shopName, ITEM_COST_CURRENCY: ITEM_COST_CURRENCY, ITEM_COST: itemCost, ITEM_QUANTITY: itemQuantity, COMMENT: comment })

                  console.log(responseJson,"responseeeeeeejson")
                if (responseJson.message == "Post data successfully.") {
                    this.setState({ loader: false })
                    this.props.navigation.navigate('adisonline',
                    {data:responseJson.data.id})
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
        }else{
            if(!this.props.navigation.state.params.updateimg){
                const image1=Base_URL_IMAGE+this.state.uri;
                this.setState({uri:image1})
            }
            const { productName, uri, countryName, shopName, itemCostCurrency, itemCost, itemQuantity, comment, sellerFee } = this.state;
            const ITEM_COST_CURRENCY = itemCostCurrency == "" ? "USD" : itemCostCurrency
    
            UpdateAD(productName, uri, countryName, shopName, itemCost, ITEM_COST_CURRENCY, itemQuantity, comment, ITEM_ID, sellerFee,this.state.data.id)
                .then((response) => response.json())
                .then((responseJson) => {
    
                    // this.props.navigation.navigate('shopfinal', { PRODUCT_NAME: productName, PRODUCT_IMAGE: uri, COUNTRY_NAME: countryName, SHOP_NAME: shopName, ITEM_COST_CURRENCY: ITEM_COST_CURRENCY, ITEM_COST: itemCost, ITEM_QUANTITY: itemQuantity, COMMENT: comment })
    
                    if (responseJson.message == "Updated successfully.") {
                        this.setState({ loader: false })
                        this.props.navigation.navigate('adisonline')
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
        return (
            <View style={styles.container}>

                <ScrollView>
                    <Header onPress={() => this.props.navigation.goBack(null)} />

                    <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 25, fontWeight: 'bold', marginTop: wp(5), marginBottom: 15 }}>I would like to buy</Text>
                    <Image style={{ width: "95%", height: Height / 15, marginBottom: hp(3), alignSelf: 'center' }} source={require('../../assets/images/icon/up/step6.jpg')} />

                    <View style={styles.col}>
                        <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), marginTop: wp(3), textAlign: 'left' }}>Additional comments</Text>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={[styles.input, { height: 60, paddingLeft: 10 }]}
                                placeholder={'Type here'}
                                value={this.state.comment}
                                onChangeText={comment => this.setState({ comment })}
                            />
                        </View>
                    </View>

                    <View style={styles.col}>
                        <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), marginTop: wp(3), textAlign: 'left' }}>Additional Information</Text>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Seller Fee'}
                                value={this.state.sellerFee}
                                onChangeText={sellerFee => this.setState({ sellerFee })}
                                keyboardType="decimal-pad"
                            />
                        </View>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Item Height in cm'}
                                value={this.state.itemHeight}
                                onChangeText={itemHeight => this.setState({ itemHeight })}
                                keyboardType="decimal-pad"
                            />
                        </View>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Item Width in cm'}
                                value={this.state.itemWidth}
                                onChangeText={itemWidth => this.setState({ itemWidth })}
                                keyboardType="decimal-pad"
                            />
                        </View>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Item Length in cm'}
                                value={this.state.itemLength}
                                onChangeText={itemLength => this.setState({ itemLength })}
                                keyboardType="decimal-pad"
                            />
                        </View>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Item Weight in kg'}
                                value={this.state.itemWeight}
                                onChangeText={itemWeight => this.setState({ itemWeight })}
                                keyboardType="decimal-pad"
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: hp(3), alignItems: 'center' }}>
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
                            <View style={{ height: hp(18), width: '100%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <Image resizeMode='contain' style={{ width: 45, height: 45, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/flag.png')} />
                                <Text numberOfLines={2} style={{ color: "#44c7f3", fontSize: 16, marginTop: hp(2) }}>{this.state.countryName}</Text>
                            </View>
                        </View>
                        <View style={{ width: '29%', justifyContent: 'center', alignItems: 'center', marginLeft: wp(3.2) }}>
                            <View style={{ height: hp(18), width: '100%', elevation: 6, backgroundColor: '#ffffff', borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                                <Image resizeMode='contain' style={{ width: 45, height: 45, alignSelf: 'center', marginRight: 8 }} source={require('./../image/icon/shop.png')} />
                                <Text numberOfLines={2} style={{ color: "#44c7f3", fontSize: 16, marginTop: hp(2) }}>{this.state.shopName}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: wp(92), marginTop: hp(3), marginBottom: hp(10), alignSelf: 'center', backgroundColor: '#ffffff', elevation: 6, borderRadius: 10, padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#44c7f3' }}>{this.state.itemCostCurrency} {this.state.itemCost}</Text>
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
                            text={"Done"}
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
        width: WIDTH - 85,

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