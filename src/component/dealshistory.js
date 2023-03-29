import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from "react-native-toast-message";


export default class dealshistory extends React.Component {
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
            deals: [
                { id: 1 },
                { id: 1 },
                { id: 1 },
                { id: 1 },
                { id: 1 },
            ]

        };
    }

    renderDeals = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('dealshistory2')} style={styles.col}>

                <View style={{ width: '33.3%' }}>
                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 10 }}>Product</Text>
                    <Text style={{ fontSize: 12, color: '#a1a2a4', textAlign: 'center', marginTop: 10 }}>Playstation 4 1 TB</Text>

                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 10, marginTop: 30 }}>Buyer</Text>
                    <Text style={{ fontSize: 12, color: '#a1a2a4', textAlign: 'center', marginTop: 10 }}>Jonny Hilton</Text>
                </View>

                <View style={{ width: '33.3%', }}>
                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 10 }}>Date</Text>
                    <Text style={{ fontSize: 12, color: '#a1a2a4', textAlign: 'center', marginTop: 10 }}>20/5/20</Text>

                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 10, marginTop: 30 }}>Location</Text>
                    <Text style={{ fontSize: 12, color: '#a1a2a4', textAlign: 'center', marginTop: 10 }}>London, UK</Text>
                </View>

                <View style={{ width: '33.3%', marginLeft: 23 }}>
                    <Text style={{ fontSize: 18, color: '#44c7f3', textAlign: 'center', marginTop: 30, marginBottom: 10 }}>Fee</Text>
                    <Text style={styles.fee}>20$</Text>
                </View>
            </TouchableOpacity>

        )

    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
                </View>
                <ImageBackground source={require('./../image/icon/bg.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row', marginTop: wp('12') }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => this.props.navigation.goBack(null)}>
                            <Image style={styles.menuicon} source={require('./../image/icon/left-arrow.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, marginTop: 20, }}>Deals history</Text>

                    <View style={{ marginTop: wp('35%'), padding: 0 }}>


                        <ScrollView style={{ marginBottom: wp('35%') }}>

                            <FlatList
                                pagingEnabled
                                data={this.state.deals}
                                renderItem={this.renderDeals}
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
        borderRadius: 20,
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
    },

    fee: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 0,
        backgroundColor: '#44c7f3',
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});