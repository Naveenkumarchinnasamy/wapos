import React from 'react';
import { StyleSheet, Text, View, Image, BackHandler, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get('screen')
const { height: Height2 } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import { height } from 'react-native-dimension';
import { StackActions } from 'react-navigation';
import { withNavigationFocus } from "react-navigation"
import GradientButton from '../utils/GradientButton';
class track extends React.Component {
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

        };
    }

    // componentDidMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }
    // handleBackButton = () => {
    //     this.props.navigation.navigate("paymentConfirm");

    //     // const pushAction = StackActions.push({
    //     //     routeName: 'paymentConfirm',
    //     // });

    //     // this.props.navigation.dispatch(pushAction);
    //     return true
    // }

    // componentDidMount() {
    //     this.backHandler = BackHandler.addEventListener(
    //       'hardwareBackPress',
    //       this.handleBackPress,
    //     );
    //   }

    //   componentDidUpdate(prevProps) {
    //     if(prevProps.isFocused !== this.props.isFocused)
    //       this.props.isFocused === true 
    //     ? this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    //     : this.backHandler.remove();

    //   }

    //   componentWillUnmount() {
    //     console.warn('removed');
    //     this.backHandler.remove();
    //   }

    //   handleBackPress = () => {
    //       this.props.navigation.navigate("paymentConfirm")
    //     return true;
    //   };



    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.toggleDrawer()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/menu.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ marginLeft: 50, textAlign: 'left', fontSize: 23, color: '#ffffff', marginTop: 20, marginBottom: 50 }}><Text style={{ fontWeight: 'bold', fontSize: 35 }}>Track Order</Text>{'\n'}Play station 4 1 TB</Text>


                    <View >

                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 50 }}>
                            <View style={{ width: '30%' }}>
                                <Image style={{ width: 100, height: hp("65%"), marginTop: -hp("5%") }} source={require('../../assets/images/vertical.png')} />
                            </View>
                            <View style={{ width: WIDTH - 115 }}>


                                <Text style={{ fontSize: 20, color: '#44c7f3', marginTop: 0 }}>Purched by seller</Text>
                                <Text style={{ fontSize: 17, color: '#000000', textAlign: "left" }}>23/4/19</Text>

                                <FontAwesome5 name="check-circle" style={{ marginLeft: 200, marginTop: -44 }} size={19} color="#44c7f3" />

                                <Text style={{ fontSize: 20, color: '#44c7f3', marginTop: hp("8%") }}>Departed country </Text>
                                <Text style={{ fontSize: 20, color: '#44c7f3', }}>of origin </Text>
                                <Text style={{ fontSize: 17, color: '#000000', textAlign: "left" }}>23/4/19</Text>
                                <FontAwesome5 name="check-circle" style={{ marginLeft: 200, marginTop: -70 }} size={19} color="#44c7f3" />

                                <Text style={{ fontSize: 20, color: '#44c7f3', marginTop: hp("9%") }}>Arrived at local aiport</Text>
                                <Text style={{ fontSize: 17, color: '#000000', textAlign: "left" }}>23/4/19</Text>
                                <FontAwesome5 name="check-circle" style={{ marginLeft: 200, marginTop: -44 }} size={19} color="#44c7f3" />

                                <Text style={{ fontSize: 20, color: '#44c7f3', marginTop: hp("8.4%") }}>Picked up for delivery</Text>
                                <Text style={{ fontSize: 17, color: '#000000', textAlign: "left" }}>23/4/19</Text>
                                <FontAwesome5 name="check-circle" style={{ marginLeft: 200, marginTop: -44 }} size={19} color="#44c7f3" />

                                <Text style={{ fontSize: 20, color: '#44c7f3', marginTop: hp("9%") }}>Estimated delivery</Text>
                                <Text style={{ fontSize: 17, color: '#000000', textAlign: "left" }}>23/4/19</Text>
                                <FontAwesome5 name="check-circle" style={{ marginLeft: 200, marginTop: -44 }} size={19} color="#44c7f3" />
                            </View>

                        </View>


                    </View>
                    <View style={{ flex: 1, position: "absolute", bottom: (Height - Height2) / 20, left: WIDTH / 4, justifyContent: "center" }}>
                        <GradientButton
                            onPress={() => this.props.navigation.navigate('deliver')}
                            text={"Home"}
                            color1={'#44c7f3'}
                            color2={'#44c7f3'}
                            borderRadius={50}
                            width={170}
                            height={45}
                        />
                        {/* <GradientButton
                            style={{ alignSelf: 'center', justifyContent: "center" }}
                            text="Home"
                            textStyle={{ fontSize: 17, color: '#ffffff' }}
                            gradientBegin="#44c7f3"
                            gradientEnd="#44c7f3"
                            gradientDirection="diagonal"
                            height={45}
                            width={170}
                            radius={50}
                            impact
                            impactStyle='Light'
                            onPressAction={() => this.props.navigation.navigate('deliver')}
                        /> */}

                    </View>

                </ImageBackground>
            </View >
        );
    }
}

export default withNavigationFocus(track);

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
    secondInput: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 40,
        borderBottomColor: '#EAEAEAEA',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },
    firstInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderColor: '#f1f2f3',
        borderWidth: 1,
        padding: 5,
        height: 50
    },
    input: {
        width: '80%',
        height: 30,
        padding: 5,
        marginBottom: 0,
        color: 'black',
        fontSize: 16,
        marginTop: 6,
    },

    menuicon: {
        width: 30,
        height: 30,
        marginLeft: 20
    },
    col: {
        width: '90%',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
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