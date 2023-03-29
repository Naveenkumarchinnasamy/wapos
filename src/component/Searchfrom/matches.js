import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, BackHandler, ActivityIndicator, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../utils/Header';

export default class matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data:[]
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header isHide={true} onPress={() => this.props.navigation.navigate('Search')} />
                    <View style={{ marginTop: hp(-16) }}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 25, fontWeight: 'bold', marginBottom: hp(2) }}>Matches</Text>
                        <View style={{
                            elevation: 6,
                            backgroundColor: '#ffffff',
                            margin: 20,
                            borderRadius: 20,
                        }}>

                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#44c7f3', textAlign: 'center', marginTop: 40 }}>Great stuff!</Text>

                            <View style={{ margin: 20, marginLeft: 30 }}>
                                <Text style={{ fontSize: 15, color: '#898989', marginTop: 5, alignSelf: 'center', textAlign: 'justify' }}>Now, just sit back and relax as we will find you the best fit for your ad. Its just a matter of time unit you get a notification form a fellow traveller who is willing to make a purchase for you. we will do our best to find the fastest and most available traveller around.</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#44c7f3', marginTop: 30, alignSelf: 'center', marginBottom: 50 }}>Thank you for choosing us !</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>

                <TouchableOpacity style={{ marginBottom: hp(2) }} onPress={() => this.props.navigation.navigate('Search')}>
                    <LinearGradient
                        colors={['#44c7f3', '#2a78bc']}
                        style={{ marginVertical: 8., marginTop: 10, alignSelf: 'center', height: 45, width: 280, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text
                            style={{
                                backgroundColor: 'transparent',
                                color: '#ffffff',
                                fontSize: 17,
                            }}>
                            Exit
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

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

    }
});