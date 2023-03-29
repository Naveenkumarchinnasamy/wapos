import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Dimensions, TouchableOpacity, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';
import Checkbox from 'expo-checkbox';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';
import { postItemType } from '../api/helper';


export default class tripdetail3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fragilePackage: false,
            index: 1,

            name: '',
            height: '',
            width: '',
            length: '',
            weight: '',
            quantity: '',
            data:null

        };
    }

    onChangeFunction(data) {
        if (data == true) {
            this.setState({ fragilePackage: false });
        } else if (data == false) {
            this.setState({ fragilePackage: true });
        }
    }
componentDidMount(){
    const {editdata}=this.props.navigation.state.params;
    if(editdata!=null){
        this.setState({data:editdata});
        this.setState({name:editdata[0].item_type.name});
        this.setState({height:editdata[0].item_type.height});
        this.setState({width:editdata[0].item_type.width});
        this.setState({length:editdata[0].item_type.length});
        this.setState({weight:editdata[0].item_type.weight.toString()});
        this.setState({quantity:editdata[0].item_type.quantity.toString()});
        this.setState({ fragilePackage: editdata[0].will_accept_fragile_package });
    }
}
    Post = async () => {

        this.setState({ loading: true })

        const { name, height, width, length, weight, quantity } = this.state;
console.log(name, height, width, length, weight, quantity,"itemsss")
        if (name == "") {
            Alert.alert("Empty Field!", "Please enter your item name");
            return;
        } else if (height == "") {
            Alert.alert("Empty Field!", "Please enter your item height");
            return;
        } else if (width == "") {
            Alert.alert("Empty Field!", "Please enter your item width");
            return;
        } else if (length == "") {
            Alert.alert("Empty Field!", "Please enter your item length");
            return;
        } else if (weight == "") {
            Alert.alert("Empty Field!", "Please enter your item weight");
            return;
        } else if (quantity == "") {
            Alert.alert("Empty Field!", "Please enter your item quantity");
            return;
        } else {

            postItemType(name, height, width, length, weight, quantity)
                .then((response) => response.json())
                .then((responseJson) => {

                    if (responseJson.message == "Post data successfully.") {
                        console.log(responseJson.data.id,"responseid")
                        this.move(responseJson.data.id);
                        return;
                    } else {
                        alert(JSON.stringify(responseJson))
                        // Alert.alert("404", "Something went wrong please try in a while.")
                        return;
                    }

                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    move(ITEM_ID) {
        const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry } = this.props.navigation.state.params
        const { index, fragilePackage } = this.state;
console.log(arrivalDateAtOrigin,"step3");
        if (index == 0) {
            Alert.alert("Empty Field!", "Please select your item type");
            return;
        } else {
            this.props.navigation.navigate('tripsummary',
                {
                    ticketNumber: ticketNumber,
                    arrivalDestinationDate: arrivalDestinationDate,
                    arrivalDestinationAirport: arrivalDestinationAirport,
                    pnrNumber: pnrNumber,
                    arrivalDateAtOrigin: arrivalDateAtOrigin,
                    originAirport: originAirport,
                    originCountry: originCountry,
                    destinationCountry: destinationCountry,
                    itemType: ITEM_ID,
                    fragilePackage: fragilePackage,
                    editdata:this.state.data
                })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <KeyboardAvoidingView behavior='position'>
                    <ScrollView>

                        <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: '110%' }} resizeMode='stretch'>

                            <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                                <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                                    <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                                </TouchableOpacity>
                                <View style={{ width: '40%' }}></View>

                            </View>

                            <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 35, fontWeight: 'bold', marginTop: wp(10), marginBottom: -100 }}>Trip Details</Text>

                            <Text style={{ alignSelf: 'center', fontSize: 20, color: '#44c7f3', marginTop: wp(50), marginBottom: 20 }}>Item Type?</Text>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={[styles.input, { width: '100%' }]}
                                    label='NAME'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'NAME'}
                                    value={this.state.name}
                                    onChangeText={name => this.setState({ name })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 10 }} color="#D9D9D9" />} />}
                                />
                            </View>



                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                                        <TextInput
                                            style={[styles.input, { width: '100%' }]}
                                            label='HEIGHT'
                                            mode='outlined'
                                            theme={{
                                                colors: {
                                                    primary: '#c8c8c8',

                                                },
                                                roundness: 15,
                                                outlineColor: '#ffffff'
                                            }}
                                            placeholder={'HEIGHT'}
                                            value={this.state.height}
                                            onChangeText={height => this.setState({ height })}
                                        />
                                    </View>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                                        <TextInput
                                            style={[styles.input, { width: '100%' }]}
                                            label='WIDTH'
                                            mode='outlined'
                                            theme={{
                                                colors: {
                                                    primary: '#c8c8c8',

                                                },
                                                roundness: 15,
                                                outlineColor: '#ffffff'
                                            }}
                                            placeholder={'WIDTH'}
                                            value={this.state.width}
                                            onChangeText={width => this.setState({ width })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                                        <TextInput
                                            style={[styles.input, { width: '100%' }]}
                                            label='LENGTH'
                                            mode='outlined'
                                            theme={{
                                                colors: {
                                                    primary: '#c8c8c8',

                                                },
                                                roundness: 15,
                                                outlineColor: '#ffffff'
                                            }}
                                            placeholder={'LENGTH'}
                                            value={this.state.length}
                                            onChangeText={length => this.setState({ length })}
                                            keyboardType={'phone-pad'}
                                        />
                                    </View>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                                        <TextInput
                                            style={[styles.input, { width: '100%' }]}
                                            label='WEIGHT'
                                            mode='outlined'
                                            theme={{
                                                colors: {
                                                    primary: '#c8c8c8',

                                                },
                                                roundness: 15,
                                                outlineColor: '#ffffff'
                                            }}
                                            placeholder={'WEIGHT'}
                                            value={this.state.weight}
                                            onChangeText={weight => this.setState({ weight })}
                                            keyboardType={'phone-pad'}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={[styles.firstInput, { marginTop: 0, alignSelf: 'center' }]}>
                                <TextInput
                                    style={[styles.input, { width: '100%' }]}
                                    label='QUANTITY'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'QUANTITY'}
                                    value={this.state.quantity}
                                    onChangeText={quantity => this.setState({ quantity })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 10 }} color="#D9D9D9" />} />}
                                    keyboardType={'phone-pad'}
                                />
                            </View>


                            <View style={{ flexDirection: 'row', paddingLeft: 0, marginTop: 30, alignSelf: 'center' }}>
                                <View style={{ width: '10%', marginTop: -26 }}>
                                    <Switch
                                        style={styles.switchAlignStyle}
                                        value={this.state.fragilePackage}
                                        trackColor={{ false: "#DBDBDB", true: "#44c7f3" }}
                                        thumbColor={this.state.fragilePackage ? "#ffffff" : "#ffffff"}
                                        onValueChange={() => {
                                            this.onChangeFunction(this.state.fragilePackage);
                                        }}
                                    />
                                </View>
                                <Text style={{ fontSize: 16, marginLeft: 0, color: '#747474' }}>Willing to accept Fragile packages?</Text>
                            </View>

                        </ImageBackground>
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={{ flexDirection: 'row', position: "absolute", left: 0, bottom: 0 }}>
                    <View style={{ width: '50%' }}>
                        <GradientButton
                            onPress={() => this.props.navigation.navigate('Search')}
                            text={"Cancel"}
                            color1={'transparent'}
                            color2={'transparent'}
                            borderRadius={50}
                            width={'90%'}
                            height={45}
                            borderWidth={2}
                            borderColor={'#44c7f3'}
                            textColor={'#44c7f3'}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <GradientButton
                            onPress={() => this.Post()}
                            text={"Next"}
                            color1={'#44c7f3'}
                            color2={'#2a78bc'}
                            borderRadius={50}
                            width={'90%'}
                            height={45}
                            marginTop={10}
                        />
                    </View>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
        marginHorizontal: 20,
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
        width: '50%',
        height: 50,
        backgroundColor: '#ffffff',
        fontSize: 15,

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

    },

    switchAlignStyle: {
        alignContent: "center",
        marginTop: 15
    },


    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginTop: -5
    },
    label: {
        margin: 8,
    },

});