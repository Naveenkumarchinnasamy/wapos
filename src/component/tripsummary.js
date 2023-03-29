import React from 'react';
import { StyleSheet, Text, Pressable, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Modal from "react-native-modal";
import GradientButton from '../utils/GradientButton';
import { postTrip, UpdateTrip } from '../api/helper';
import moment from 'moment';

export default class tripsummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data:null
        };
    }
componentDidMount(){
    const {itemType,editdata}=this.props.navigation.state.params
    if(editdata!=null){
this.setState({data:editdata});
    }
    console.log(itemType,"edmg")
}
    Post = async () => {

        this.setState({ loading: true })
if(this.state.data==null){
        const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage } = this.props.navigation.state.params

        postTrip(ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ loading: false })
                if (responseJson.message == "Post data successfully.") {
                    this.setState({ modalVisible: true })
                } else {
                    alert(JSON.stringify(responseJson))
                    // Alert.alert("404", "Something went wrong please try in a while")
                    return;
                }

            })
            .catch((error) => {
                this.setState({ loading: false })
                console.log(error)
            });
        }else{
            const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage } = this.props.navigation.state.params

            UpdateTrip(ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage,this.state.data[0].id)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ loading: false })
                    if (responseJson.message == "Updated successfully.") {
                        this.setState({ modalVisible: true })
                    } else {
                        alert(JSON.stringify(responseJson))
                        // Alert.alert("404", "Something went wrong please try in a while")
                        return;
                    }
    
                })
                .catch((error) => {
                    this.setState({ loading: false })
                    console.log(error)
                });
        }
    }
    render() {
        const { ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('./../image/icon/bgw.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                        <View style={{ flexDirection: 'row', marginTop: wp('10%') }}>
                            <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                                <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '40%' }}></View>
                        </View>


                        <View style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6,
                            backgroundColor: '#ffffff',
                            margin: 20,
                            borderRadius: 20,
                            marginTop: wp('15%')
                        }}>

                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#98CDED', textAlign: 'center', marginTop: 40 }}>Trip Summary</Text>

                            <View style={{ margin: 20, marginLeft: 30 }}>
                                {/* <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#44c7f3', }}>Tel Aviv 5 days</Text> */}

                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#44c7f3', marginTop: 40 }}>Arrival date at destination:</Text>
                                <Text style={{ fontSize: 17, color: '#898989', marginTop: 5 }}>{moment(arrivalDestinationDate).format('MMMM Do YYYY, h:mm:ss A')}{'\n'}<Text style={{ fontWeight: '500' }}>{arrivalDestinationAirport}</Text></Text>

                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#44c7f3', marginTop: 40 }}>Arrival date back at origin:</Text>
                                <Text style={{ fontSize: 17, color: '#898989', marginTop: 5 }}>{moment(arrivalDateAtOrigin).format('MMMM Do YYYY, h:mm:ss A')}{'\n'}<Text style={{ fontWeight: '500' }}>{originAirport}</Text></Text>

                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#44c7f3', marginTop: 40, marginBottom: 10 }}>Accepting offer for</Text>
                                {itemType == 1 ?
                                    <Text style={{ fontSize: 18, color: '#898989', marginTop: 5 }}>{'\u2022'} Big: More than 2KG</Text>
                                    : itemType == 2 ?
                                        <Text style={{ fontSize: 18, color: '#898989', marginTop: 5 }}>{'\u2022'} Medium: 1KG - 2KG</Text>
                                        : itemType == 3 ?
                                            <Text style={{ fontSize: 18, color: '#898989', marginTop: 5 }}>{'\u2022'} Small: Up to 1KG</Text>
                                            : null
                                }
                                <Text style={{ fontSize: 18, color: '#898989', marginTop: 15 }}>{'\u2022'} Fragile items: {fragilePackage == true ? "Yes" : "No"}</Text>
                            </View>

                        </View>

                    </ImageBackground>
                </ScrollView>

                {this.state.loading == false ? null : <ActivityIndicator size="large" color={'#44c7f3'} style={{ marginTop: 20, marginBottom: 20 }} />}

                <View style={{ flexDirection: 'row' }}>
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
                            text={this.state.data==null?"Post the trip":"Update the trip"}
                            color1={'#44c7f3'}
                            color2={'#2a78bc'}
                            borderRadius={50}
                            width={'90%'}
                            height={45}
                            marginTop={10}
                        />


                    </View>
                </View>


                <View style={styles.centeredView}>
                    <Modal
                        hasBackdrop={true}
                        backdropColor="#b2b2b2"
                        backdropOpacity={0.7}
                        animationType="slide"
                        transparent={true}
                        isVisible={this.state.modalVisible}

                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.headerText2}>Great !</Text>
                                <Text style={styles.modalText3}>Your trip details has been {this.state.data==null?<>posted</>:<>updated</>} :)</Text>
                                <Text style={styles.modalText}> Now just enjoy your trip and wait. </Text>
                                <Text style={styles.modalText}> We will notify you about potential</Text>
                                <Text style={styles.modalText}> buyers in your location.</Text>

                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {
                                        this.setState({ modalVisible: false })
                                        this.props.navigation.navigate("Search")
                                    }}
                                >
                                    <Text style={styles.textStyle}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>


            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFE'
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,

        backgroundColor: "#fffff7",
        width: "100%",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 18,
        paddingHorizontal: "20%",
        paddingVertical: "2.8%",
        elevation: 2,

        backgroundColor: "#3c99dc",
        marginTop: 30
    },
    buttonOpen: {
        backgroundColor: "#3c99dc",
    },
    buttonClose: {
        backgroundColor: "#3c99de",
    },
    textStyle: {
        color: "white",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 2,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        fontSize: 18,
        color: "#3f4d50",
        opacity: 0.7
    },
    modalText3: {
        marginBottom: 20,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        fontSize: 18,
        color: "#3f4d50",
        opacity: 0.7
    },

    headerText2: {
        fontSize: 30,
        fontWeight: "500",
        color: '#2e95d7',
        alignSelf: 'center',
        fontWeight: "bold",
        marginBottom: 10
    },

});