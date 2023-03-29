import React from 'react';
import { StyleSheet, Text, View, Image,Alert, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";
import { DeleteTrip, getFlightDetails } from '../api/helper';
import moment from 'moment';
import { AntDesign } from '@expo/vector-icons';
import { DataTable,Title } from 'react-native-paper';
export default class flightdetail extends React.Component {
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
            id:'',
            tripdetails: []

        };
        this.EditClick=this.EditClick.bind(this);
    }
    componentDidMount = async () => {
        this.setState({ loader: true })
        getFlightDetails()
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.message == "Successful") {
                    this.setState({ loader: false })
                    console.log(responseJson.data)
                    this.setState({ tripdetails: responseJson.data })
                    if(responseJson.data.length>0){
                        this.setState({id:responseJson.data[0].id});
                    }
                    console.log(this.state.tripdetails, "trip")
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
    EditClick(){
        this.props.navigation.navigate('tripdetail', {editdata:this.state.tripdetails})
    }
    Deletealert = () =>
    Alert.alert('Alert Title', 'Do you want to delete this trip', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        DeleteTrip(this.state.id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson,"responsedele")
                alert(responseJson.message);
                this.props.navigation.navigate("Search");

            })
            .catch((error) => {
                this.setState({ loader: false })
                console.log(error)
            })
      }},
    ]);
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                            <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, marginTop: 20, }}>Flight details</Text>

                        <View style={{ marginTop: wp('5%'), padding: 0 }}>

                            {this.state.tripdetails && this.state.tripdetails.length > 0 &&
                                this.state.tripdetails.map((ele) =>
                                    <View style={styles.col}>

                                        <View style={{flexDirection: 'row'}}>
                                    <View style={{ width: '70%', paddingLeft: 10 }}>
                                    </View>
                                    <TouchableOpacity style={{ width: '15%' }} onPress={this.EditClick}>
                                        <Image style={{ width: 25, height: 25, alignSelf: 'center', marginTop: 0 }} source={require('./../image/icon/editb.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '15%' }} onPress={this.Deletealert}>
                                    <AntDesign name="delete" style={{ alignSelf: 'flex-end', marginRight: 15, }} size={24} color="#44c7f3" />
                                    {/* <Image style={{ width: 25, height: 25, alignSelf: 'center' }} source={require('./../image/icon/delete.png')} /> */}
                                    </TouchableOpacity>
                                </View>
                                        <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, flexDirection: 'row', paddingBottom: 30, paddingTop: 20 }}>
                                            <View style={{ width: '80%', paddingLeft: 10 }}>
                                                <Text style={{ fontSize: 20, color: '#000000', textAlign: 'left', fontWeight: '100' }}>Arrival date at destination</Text>
                                                <Text style={{ fontSize: 15, color: '#44c7f3', textAlign: 'left', marginTop: 10, fontWeight: 'bold' }}>{moment(ele.arrival_date_at_destination).format("DD/MM/YYYY hh:mm a")} {ele.destination_airport},{ele.destination_country}</Text>
                                            </View>
                                        </View>

                                        <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, flexDirection: 'row', paddingBottom: 30, paddingTop: 20 }}>
                                            <View style={{ width: '80%', paddingLeft: 10 }}>
                                                <Text style={{ fontSize: 20, color: '#000000', textAlign: 'left', fontWeight: '100' }}>Arrival date at origin</Text>
                                                <Text style={{ fontSize: 15, color: '#44c7f3', textAlign: 'left', marginTop: 10, fontWeight: 'bold' }}>{moment(ele.arrival_date_at_origin).format("DD/MM/YYYY hh:mm a")} {ele.origin_airport},{ele.origin_country}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row',paddingTop: 20}}>
                                            <View style={{width:'89%'}}>
                                        <Text style={{ fontSize: 20, color: '#000000', textAlign: 'left', fontWeight: '100' }}>Item</Text>
                                        </View>
                                            </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 30, paddingTop: 20 }}>
                                            <View style={{ width: '100%'}}>                        
                                                <DataTable>
                                                    <DataTable.Header>
                                                        <DataTable.Title>Height</DataTable.Title>
                                                        <DataTable.Title>Width</DataTable.Title>
                                                        <DataTable.Title>Length</DataTable.Title>
                                                        <DataTable.Title>Quantity</DataTable.Title>
                                                        <DataTable.Title>Weight</DataTable.Title>
                                                       
                                                    </DataTable.Header>

                                                    <DataTable.Row>
                                                        <DataTable.Cell style={{textAlign:'center'}}>{ele.item_type.height!=null?ele.item_type.height:<>Null</>}</DataTable.Cell>
                                                        <DataTable.Cell>{ele.item_type.width!=null?ele.item_type.width:<>Null</>}</DataTable.Cell>
                                                        <DataTable.Cell>{ele.item_type.length!=null?ele.item_type.length:<>Null</>}</DataTable.Cell>
                                                        <DataTable.Cell>{ele.item_type.quantity!=null?ele.item_type.quantity:<>Null</>}</DataTable.Cell>
                                                        <DataTable.Cell>{ele.item_type.weight!=null?ele.item_type.weight:<>Null</>}</DataTable.Cell>
                                                     
                                                    </DataTable.Row>


                                                </DataTable>
                                            </View>
                                        </View>

                                    </View>)}

                        </View>

                    </ScrollView>

                </ImageBackground>
            </View >
        );
    }
}

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