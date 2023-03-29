import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get("window")
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';
import Header from '../utils/Header';

export default class shopnow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            data:null
        };
    }

    move() {
        const { productName } = this.state;
        if (productName === "") {
            Alert.alert("Empty Field!", "Please enter your product name");
            return;
        }
        this.props.navigation.navigate('shopnowimg', { PRODUCT_NAME: productName,editdata:this.state.data })
    }
    componentDidMount(){
        if(this.props.navigation.state.params!=undefined){
       const {editdata} = this.props.navigation.state.params;
       this.setState({data:editdata,productName:editdata.product_name});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header onPress={() => this.props.navigation.goBack(null)} />

                    <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 25, marginTop: wp(5), fontWeight: 'bold', marginBottom: 10 }}>I would like to buy</Text>
                    <Image style={{ width: "95%", height: Height / 15, marginTop: 10, marginBottom: 30, alignSelf: 'center' }} source={require('../../assets/images/icon/up/step1.jpg')} />

                    <View style={styles.col}>
                        <Text style={{ color: "#44c7f3", fontSize: 20, marginLeft: wp('9%'), marginTop: wp('0%'), textAlign: 'left' }}>Product name</Text>
                        <View style={styles.firstInput}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Enter product name or paste a link'}
                                value={this.state.productName}
                                onChangeText={productName => this.setState({ productName })}
                            />
                            <FontAwesome5 name="camera" style={{ marginLeft: 5, alignSelf: "center" }} size={16} color="#44c7f3" />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ alignItems: 'flex-start' }}>
                    <View style={{ marginLeft: wp(5) }}>
                        <GradientButton
                            onPress={() => this.move()}
                            text={"Next"}
                            color1={'#44c7f3'}
                            color2={'#2a78bc'}
                            marginTop={wp('5.5%')}
                            borderRadius={50}
                            width={200}
                            height={40}
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
        padding: 5
    },
    input: {
        width: '90%',
        padding: 5,
        paddingLeft: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 15
    },
    secondInput: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 40,
        borderBottomColor: '#EAEAEAEA',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },

    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',
        padding: 0,
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