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
import { getFlightDetails } from '../api/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class tripdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketNumber: '',
            arrivalDestinationDate: '',
            arrivalDestinationAirport: '',
            pnrNumber: '',
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
    if(this.props.navigation.state.params!=undefined){
    const {editdata}=this.props.navigation.state.params;
    console.log(editdata,"edittttt")
    this.setState({data:editdata});
            if(editdata.length>0){
                this.setState({ticketNumber:editdata[0].ticket_number});
                this.setState({arrivalDestinationDate:editdata[0].arrival_date_at_destination});
                this.setState({arrivalDestinationAirport:editdata[0].destination_airport});
                this.setState({pnrNumber:editdata[0].pnr_number});
            }

    }
}
    handlePicker = (datetime) => {
        this.setState({
            isVisibleTo: false,
            arrivalDestinationDate: moment(datetime).format('')
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

    move = async () => {

        const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber } = this.state;
        if (ticketNumber == "") {
            Alert.alert("Empty Field!", "Please enter your ticket number");
            return;
        } else if (arrivalDestinationDate == "") {
            Alert.alert("Empty Field!", "Please enter your arrival date at destination");
            return;
        } else if (arrivalDestinationAirport == "") {
            Alert.alert("Empty Field!", "Please enter your destination airport");
            return;
        } else if (pnrNumber == "") {
            Alert.alert("Empty Field!", "Please enter your PNR number");
            return;
        } else {
            this.props.navigation.navigate('tripdetail2', { ticketNumber: ticketNumber, arrivalDestinationDate: arrivalDestinationDate, arrivalDestinationAirport: arrivalDestinationAirport, pnrNumber: pnrNumber,editdata:this.state.data })
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
                            <View style={[styles.firstInput, { marginTop: wp(30), alignSelf: 'center' }]}>

                                <TextInput
                                    style={styles.input}
                                    label='ENTER YOUR TICKET NUMBER'
                                    mode='outlined'
                                    keyboardType="phone-pad"
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',
                                            outlineColor: '#ffffff'
                                        },
                                        roundness: 15
                                    }}
                                    placeholder={'Ticket number'}
                                    value={this.state.ticketNumber}
                                    onChangeText={ticketNumber => this.setState({ ticketNumber })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                />

                            </View>

                            <TouchableOpacity onPress={this.showPicker} style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='ARRIVAL DATE AT DESTINATION'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',
                                            outlineColor: '#ffffff'
                                        },
                                        roundness: 15
                                    }}
                                    placeholder={'ARRIVAL DATE AT DESTINATION'}
                                    value={`${this.state.arrivalDestinationDate == "" ? "" : moment(this.state.arrivalDestinationDate).format('MMMM Do YYYY, h:mm:ss A')}`}
                                    onChangeText={arrivalDestinationDate => this.setState({ arrivalDestinationDate })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="calendar" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                    editable={false}
                                />
                                <DateTimePickerModal
                                    isVisible={this.state.isVisibleTo}
                                    onConfirm={this.handlePicker}
                                    onCancel={this.hidePicker}
                                    mode={'datetime'}
                                    date={this.state.arrivalDestinationDate ? new Date(this.state.arrivalDestinationDate) : new Date()}                            
                                    datePickerModeAndroid={'spinner'}
                                />
                            </TouchableOpacity>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>
                                <TextInput
                                    style={styles.input}
                                    label='DESTINATION AIRPORT'
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',

                                        },
                                        roundness: 15,
                                        outlineColor: '#ffffff'
                                    }}
                                    placeholder={'DESTINATION AIRPORT'}
                                    value={this.state.arrivalDestinationAirport}
                                    onChangeText={arrivalDestinationAirport => this.setState({ arrivalDestinationAirport })}
                                    right={<TextInput.Icon name={() => <FontAwesome5 name="search" size={20} style={{ marginTop: 0 }} color="#D9D9D9" />} />}
                                />
                            </View>

                            <View style={[styles.firstInput, { marginTop: 10, alignSelf: 'center' }]}>

                                <TextInput
                                    style={styles.input}
                                    label='ENTER YOUR PNR NUMBER'
                                    mode='outlined'
                                    keyboardType="phone-pad"
                                    theme={{
                                        colors: {
                                            primary: '#c8c8c8',
                                            outlineColor: '#ffffff'
                                        },
                                        roundness: 15
                                    }}
                                    placeholder={'Ticket number'}
                                    value={this.state.pnrNumber}
                                    onChangeText={pnrNumber => this.setState({ pnrNumber })}
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