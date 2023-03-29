import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Dimensions, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
const { height: Height } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { FontAwesome5 } from '@expo/vector-icons';
import GradientButton from '../utils/GradientButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class tripdetail2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivalDateAtOrigin: '',
            originAirport: '',
            originCountry: '',
            destinationCountry: '',
            data:null

        };
    }

    onChangeFunction(data) {
        if (data == true) {
            this.setState({ driverActiveStatus: false });
        } else if (data == false) {
            this.setState({ driverActiveStatus: true });
        }
    }
componentDidMount(){
    const {editdata}=this.props.navigation.state.params
    if(editdata!=null){
        console.log(editdata[0].arrival_date_at_origin,"beforeset")
        this.setState({data:editdata});
        this.setState({arrivalDateAtOrigin:editdata[0].arrival_date_at_origin});
        this.setState({originAirport:editdata[0].origin_airport});
        this.setState({originCountry:editdata[0].origin_country});
        this.setState({destinationCountry:editdata[0].destination_country});
    }
}
    handlePicker = (datetime) => {
        this.setState({
            isVisibleTo: false,
            arrivalDateAtOrigin: moment(datetime).format('')
        })
    };
    hidePicker = () => {
        this.setState({
            isVisibleTo: false,

        })
    };
    showPicker = () => {
        this.setState({
            isVisibleTo: true,
        })
    };

    move() {
        const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber } = this.props.navigation.state.params
        const { arrivalDateAtOrigin, originAirport, originCountry, destinationCountry } = this.state;
console.log(arrivalDateAtOrigin,"step2")
        if (arrivalDateAtOrigin == "") {
            Alert.alert("Empty Field!", "Please enter your arrival date at origin");
            return;
        } else if (originAirport == "") {
            Alert.alert("Empty Field!", "Please enter your origin airport");
            return;
        } else if (originCountry == "") {
            Alert.alert("Empty Field!", "Please enter your origin country");
            return;
        } else if (destinationCountry == "") {
            Alert.alert("Empty Field!", "Please enter your destination country");
            return;
        } else {

            this.props.navigation.navigate('tripdetail3',
                {
                    ticketNumber: ticketNumber,
                    arrivalDestinationDate: arrivalDestinationDate,
                    arrivalDestinationAirport: arrivalDestinationAirport,
                    pnrNumber: pnrNumber,
                    arrivalDateAtOrigin: arrivalDateAtOrigin,
                    originAirport: originAirport,
                    originCountry: originCountry,
                    destinationCountry: destinationCountry,
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


                <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: Height }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12%') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>

                    </View>

                    <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 35, fontWeight: 'bold', marginTop: 30 }}>Trip Details</Text>

                    <View style={{ marginTop: wp('0%'), padding: 0 }}>


                        <KeyboardAvoidingView>

                            <TouchableOpacity onPress={this.showPicker} style={[styles.firstInput, { marginTop: wp(30), alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='ARRIVAL DATE AT ORIGIN'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',
                                            outlineColor: '#ffffff'
                                        },
                                        roundness: 15
                                    }}
                                    placeholder={'ARRIVAL DATE AT DESTINATION'}
                                    value={`${this.state.arrivalDateAtOrigin == "" ? "" : moment(this.state.arrivalDateAtOrigin).format('MMMM Do YYYY, h:mm:ss A')}`}
                                    onChangeText={arrivalDateAtOrigin => this.setState({ arrivalDateAtOrigin })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="calendar" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                    editable={false}
                                />
                                <DateTimePickerModal
                                    isVisible={this.state.isVisibleTo}
                                    onConfirm={this.handlePicker}
                                    onCancel={this.hidePicker}
                                    mode={'datetime'}
                                    date={this.state.arrivalDateAtOrigin ? new Date(this.state.arrivalDateAtOrigin) : new Date()}                            
                                    datePickerModeAndroid={'spinner'}
                                />
                            </TouchableOpacity>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='ORIGIN AIRPORT'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'ORIGIN AIRPORT'}
                                    value={this.state.originAirport}
                                    onChangeText={originAirport => this.setState({ originAirport })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                />
                            </View>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='ORIGIN COUNTRY'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'ORIGIN COUNTRY'}
                                    value={this.state.originCountry}
                                    onChangeText={originCountry => this.setState({ originCountry })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                />
                            </View>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='DESTINATION COUNTRY'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'DESTINATION COUNTRY'}
                                    value={this.state.destinationCountry}
                                    onChangeText={destinationCountry => this.setState({ destinationCountry })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                />
                            </View>

                        </KeyboardAvoidingView>
                    </View>

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
                                onPress={() => this.move()}
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
                </ImageBackground>
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
        width: 310,

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

});