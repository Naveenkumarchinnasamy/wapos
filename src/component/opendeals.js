import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground, Alert } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DeleteDeal, getOpenDeals } from '../api/helper';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Header from '../utils/Header';
import moment from 'moment';
import { Button } from 'react-native-paper';
import GradientButton from '../utils/GradientButton';


export default class opendeals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeals: [],
            loader: false
        };
    }

    componentDidMount = async () => {
        this.openDeals()
    }

    openDeals = async () => {
        this.setState({ loader: true })

        getOpenDeals()
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.message == "Successful") {
                    this.setState({ loader: false })
                    this.setState({ openDeals: responseJson.data })
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
    EditClick(item) {
        this.props.navigation.navigate('shopnow', { editdata: item })
    }
    Deletealert = (id) =>
        Alert.alert('Alert Title', 'Do you want to delete this Deal', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    DeleteDeal(id)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log(responseJson, "responsedele")
                            alert(responseJson.message);
                            this.props.navigation.navigate("Search");

                        })
                        .catch((error) => {
                            this.setState({ loader: false })
                            console.log(error)
                        })
                }
            },
        ]);
    renderOpenDeals = ({ item }) => {
        return (
            <View>
                <Text style={{ fontSize: 14, color: '#a1a2a4', textAlign: 'left', marginTop: 0, marginLeft: 20 }}>{moment(item.creation_date_time).format('MMMM Do YYYY, h:mm a')}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('opendealsdetail', { ITEM_ID: item.id })} style={styles.col}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '30%', paddingLeft: 10 }}>
                        </View>
                        <TouchableOpacity style={{ width: '15%' }} onPress={() => this.EditClick(item)}>
                            <Image style={{ width: 25, height: 25, alignSelf: 'center', marginTop: 0 }} source={require('./../image/icon/editb.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '15%' }} onPress={() => this.Deletealert(item.id)}>
                            <AntDesign name="delete" style={{ alignSelf: 'flex-end', marginRight: 15, }} size={24} color="#44c7f3" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '40%' }}>
                        <Button uppercase={false} style={styles.button} icon="account-search"  mode="contained" onPress={() => this.props.navigation.navigate('findsellers', { id: item.id })}>
                   Matches
                </Button>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image resizeMode='contain' style={{ width: 70, height: 70 }} source={require('./../image/icon/not1.jpg')} />
                        </View>
                        <View style={{ width: '65%', justifyContent: 'center' }}>
                            <Text numberOfLines={2} style={{ fontSize: 20, color: '#44c7f3', textAlign: 'left', fontWeight: 'bold' }}>{item.product_name}</Text>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome5 name="truck" size={25} color="#2DABE5" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
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
                    <Header onPress={() => this.props.navigation.goBack(null)} isHide={true} />

                    <View>

                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, marginTop: hp(-16), }}>My Open deals</Text>

                        <View style={{ marginTop: hp(15) }}>

                            <FlatList
                                data={this.state.openDeals}
                                renderItem={this.renderOpenDeals}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ marginBottom: 20.0 * 10.0 }}
                            />

                        </View>

                    </View>
                </ScrollView>

                {/* <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                            <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </ImageBackground> */}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
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
        // marginTop: hp('3%'),
        // alignItems: 'center',
        backgroundColor: '#44c7f3',
        borderRadius: wp('2%'),
        height: 36,
        textTransform:'lowercase'        // marginHorizontal: wp('13%'),
    },
    buttonText: {

        fontSize: 14,
        color: '#000',
        // marginTop: hp('1%'),
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
        height: 170,
        padding: 10,
        paddingTop: 25,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        // flexDirection: 'row',
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