import React from 'react';
import { StyleSheet, BackHandler, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, TouchableNativeFeedbackBase, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('screen')
const { height: Height } = Dimensions.get("screen")
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';
import { Base_URL_IMAGE } from '../api/constants';

export default class shopnowimg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: this.props.navigation.state.params.PRODUCT_NAME,
            uri: '',
            data:null,
            updateimg:false
        };
    }
    componentDidMount() {
        this.getPermissionAsync();
        if(this.props.navigation.state.params!=undefined){
            const {editdata} = this.props.navigation.state.params;
            if(editdata!=null){
            this.setState({data:editdata,uri:editdata.product_image});
            }
             }
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        this.props.navigation.navigate("shopnow");


        // const pushAction = StackActions.push({
        //   routeName:"paymentConfirm"
        // });

        // this.props.navigation.dispatch(pushAction);

        // this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName:"paymetConfirm",key:"paymentConfirm" }));

        return true
    }

    getPermissionAsync = async () => {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }

    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (result) {
                this.setState({
                    uri: result.uri,
                    updateimg:true
                });
            }
        } catch (E) {
            console.log(E);
        }
    };

    move() {

        const { productName, uri } = this.state;

        if (uri === "") {
            Alert.alert("Image!", "Please select your product image");
            return;
        }

        this.props.navigation.navigate('shopnow1', { PRODUCT_NAME: productName, PRODUCT_IMAGE: uri,editdata:this.state.data,updateimg:this.state.updateimg })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <Header onPress={() => this.props.navigation.goBack(null)} />

                    <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 25, fontWeight: 'bold', marginTop: wp(5), marginBottom: 15 }}>I would like to buy</Text>
                    <Image style={{ width: "95%", height: Height / 15, marginBottom: hp(3), alignSelf: 'center' }} source={require('../../assets/images/icon/up/step2.jpg')} />

                    <View style={styles.col}>
                        <Text style={{ color: "#44c7f3", fontSize: 20, marginTop: 10, marginLeft: wp('9%'), textAlign: 'left' }}>Product image</Text>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Enter product name or paste a link'}
                                value={this.state.productName}
                                onChangeText={productName => this.setState({ productName })}
                                editable={false}
                            />
                        </View>

                        <TouchableOpacity onPress={() => this._pickImage()} style={{ marginTop: Height / 50, alignSelf: 'center', marginBottom: 15 }}>
                            <ImageBackground source={require('./../image/fb_bg.png')} borderRadius={50} style={{ width: wp(82), justifyContent: 'center', alignItems: 'center' }} resizeMode='stretch'>
                                <View style={{ width: 230, borderRadius: 100, flexDirection: 'row', padding: 12, }}>
                                    <FontAwesome5 name="camera" style={{ marginTop: 2, marginLeft: 35 }} size={16} color="#ffffff" />
                                    <Text style={{ color: "white", fontSize: 15, marginTop: 0, paddingLeft: 10 }}>Or upload image</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '50%', alignSelf: 'center', marginTop: hp(2), marginBottom: hp(10), borderRadius: 20, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6 }}>
                        {this.state.updateimg==true?<>
                        {this.state.uri == "" ? null :
                            <Image resizeMode='contain' style={{ width: 180, height: 180, alignSelf: 'center', marginTop: hp(0) }} source={{ uri: this.state.uri }} />
                        }
                        </>:
                        <>
                        <Image resizeMode='contain' style={{ width: 180, height: 180, alignSelf: 'center', marginTop: hp(0) }} source={{ uri: Base_URL_IMAGE+this.state.uri }} />
                        </>
                        }
                        <Text style={{ color: "#44c7f3", fontSize: 16, alignSelf: 'center', paddingTop: 10, paddingBottom: 15, marginTop: this.state.uri == "" ? hp(0) : hp(-2) }}>{this.state.productName}</Text>
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
        paddingHorizontal: 5,
        paddingVertical: Height / 150
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
        paddingHorizontal: 5,
        marginBottom: 0,
        paddingLeft: 10,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 13,

    },


    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',

        paddingTop: Height / 100,
        paddingBottom: Height / 100,
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