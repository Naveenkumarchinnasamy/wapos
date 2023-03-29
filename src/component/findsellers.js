import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getMatches } from '../api/helper';
import moment from 'moment';
import GradientButton from '../utils/GradientButton';
import { Base_URL_IMAGE } from '../api/constants';

export default class findsellers extends React.Component {
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
            chat: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
            ],

        };
    }
    componentDidMount(){
        if(this.props.navigation.state.params!=undefined){
        const {id}=this.props.navigation.state.params;
        console.log(id,"editidddddddd")
        getMatches(id).then((response) => response.json())
        .then((responseJson) => {
            this.setState({chat:responseJson.data});
        })
        .catch((error) => {
            console.log(error)
        });
    }
    }

    renderChat = ({ item }) => {
        return (
            <View style={styles.col}>
                <View style={{ width: '30%' }}>
                    <Image style={{ width: 70, height: 70,borderRadius: 100, alignSelf: 'center' }} source={{uri:Base_URL_IMAGE+item?.matched_with?.profile_picture}} />
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'left', marginTop: 5 }}> 
                    {item.matched_with!=undefined?item.matched_with.first_name!=undefined?<>{item.matched_with.first_name} {item.matched_with.last_name}</>:null:null}</Text>
                    <Text style={{ fontSize: 12, color: '#a1a2a4', }}>
                        Top seller | arrives {item.trip!=undefined?item.trip.arrival_date_at_destination!=undefined?<>{moment(item.trip.arrival_date_at_destination).format('DD/MM/YYYY hh:mm')}</>:null:null}</Text>

                    <View style={{ marginTop: 20, borderTopColor: '#a1a2a4', borderTopWidth: 1, paddingTop: 10 }}>
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#a1a2a4', }}>Destination airport:
                        {item.trip!=undefined?item.trip.destination_airport!=undefined?<>{item.trip.destination_airport}</>:null:null}</Text>
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#a1a2a4', }}>Destination country:
                        {item.trip!=undefined?item.trip.destination_country!=undefined?<>{item.trip.destination_country}</>:null:null}</Text>
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#a1a2a4', }}>Origin country:
                        {item.trip!=undefined?item.trip.origin_country!=undefined?<>{item.trip.origin_country}</>:null:null}</Text>
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#a1a2a4', }}>Origin airport:
                        {item.trip!=undefined?item.trip.origin_airport!=undefined?<>{item.trip.origin_airport}</>:null:null}</Text>
                        <Text numberOfLines={3} style={{ fontSize: 12, color: '#a1a2a4', }}>Depature at:
                        {item.trip!=undefined?item.trip.origin_country!=undefined?<>{moment(item.trip.arrival_date_at_origin).format('DD/MM/YYYY hh:mm')}</>:null:null}</Text>
                    </View>
                    <View>
                        <GradientButton
                            onPress={() => this.props.navigation.navigate('Chat')}
                            text={"Chat now"}
                            color1={'#44c7f3'}
                            color2={'#2a78bc'}
                            marginTop={30}
                            borderRadius={50}
                            width={120}
                            height={35}
                        />

                        {/* <GradientButton
                            style={{ marginTop: 30, marginLeft: 0, alignSelf: 'flex-end' }}
                            text="Chat now"
                            textStyle={{ fontSize: 17, fontWeight: '100' }}
                            gradientBegin="#44c7f3"
                            gradientEnd="#2a78bc"
                            gradientDirection="diagonal"
                            height={35}
                            width={120}
                            radius={50}
                            impact
                            impactStyle='Light'
                            onPressAction={() => this.props.navigation.navigate('Chat')}
                        /> */}
                    </View>
                </View>
            </View>
        )

    }


    render() {
        return (
            <View style={styles.container}>


                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '95%' }} resizeMode='stretch'>


                    <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack()}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                        <View style={{ width: '40%' }}></View>

                    </View>

                    <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 20, marginTop: 15, }}>Wapos found</Text>
                    <Text style={{ textAlign: 'left', marginLeft: 30, color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 0, }}>{this.state.chat.length} available sellers</Text>


                    <View style={{ marginTop: wp('0%'), padding: 0 }}>


                        <Text style={{ fontSize: 23, color: '#44c7f3', marginLeft: 20, marginTop: wp('30%'), fontWeight: 'bold', marginBottom: 30 }}>Chat with a Seller:</Text>

                        <ScrollView>

                            <FlatList
                                pagingEnabled
                                data={this.state.chat}
                                renderItem={this.renderChat}
                                keyExtractor={item => item.id}
                            />

                        </ScrollView>

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
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderColor: '#e1e1e1',
        borderWidth: 2,
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
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        alignSelf: 'center'
    }
});