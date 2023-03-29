
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, Alert, Picker, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientButton from '../utils/GradientButton';
import { Updateprofile } from '../api/helper';
import {  getCurrentUser } from '../api/helper';
import { Base_URL_IMAGE } from '../api/constants';
export default class editprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            country:'',
            state: '',
            image: '',
            uri: '',
            updateimg:false,
            loading: false
        };
        this.updateProfile=this.updateProfile.bind(this);
    }
componentDidMount = async()=>{
    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    getCurrentUser(TOKEN) .then((response) => response.json())
    .then(async(responseJsonuser) => {
        this.setState({firstname:responseJsonuser.data.first_name});
        this.setState({lastname:responseJsonuser.data.last_name});
        this.setState({country:responseJsonuser.data.country});
        this.setState({state:responseJsonuser.data.states});
        this.setState({image:responseJsonuser.data.profile_picture});
    })
    .catch((error) => {
        console.log(error)
    });
}

    renderButton() {
        if (this.state.loading) {
            <View>
            </View>
        }
        return (
            <View style={{ marginTop: 15, marginBottom: 0 }}>
                <ActivityIndicator color="#2145FE" size={'large'} animating={this.state.loading} />
            </View>
        )
    };
    updateProfile=async()=>{
        const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
        if(this.state.updateimg==false){
            this.setState({image:Base_URL_IMAGE+this.state.image})
        }
        const {firstname,lastname,country,state,image}=this.state;
        console.log(image,"updwdgwdu")
        Updateprofile(firstname, lastname, country, state,image)
        .then((response) => response.json())
        .then((responseJson) => {
          getCurrentUser(TOKEN) .then((response) => response.json())
          .then(async(responseJsonuser) => {
            await AsyncStorage.removeItem('currentUserFirstName');
            await AsyncStorage.removeItem('currentUserLastName');
            await AsyncStorage.removeItem('currentUserImage');
            await AsyncStorage.removeItem('currentUserEmail');
            await AsyncStorage.removeItem('currentUserCountry');
            await AsyncStorage.removeItem('currentUserStates');
            await AsyncStorage.removeItem('currentUserRating');
            await AsyncStorage.removeItem('currentUserStatus');   
            await AsyncStorage.setItem('currentUserFirstName', `${responseJsonuser.data.first_name}`);
            await AsyncStorage.setItem('currentUserLastName', `${responseJsonuser.data.last_name}`);
            await AsyncStorage.setItem('currentUserEmail', `${responseJsonuser.data.email}`);
            await AsyncStorage.setItem('currentUserCountry', `${responseJsonuser.data.country}`);
            await AsyncStorage.setItem('currentUserStates', `${responseJsonuser.data.states}`);
            await AsyncStorage.setItem('currentUserImage', `${responseJsonuser.data.profile_picture}`);
            await AsyncStorage.setItem('currentUserRating', `${responseJsonuser.data.rating}`);
            await  AsyncStorage.setItem('currentUserStatus', `${responseJsonuser.data.status}`);
            alert(responseJson.message);
            this.props.navigation.navigate('Search')
            })
            .catch((error) => {
                console.log(error)
            });
        })
        .catch((error) => {
            this.setState({ loader: false })
            console.log(error,"ewfwe")
        })
    }


    getPermissionAsync = async () => {


        if (Constants.platform.android) {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            console.log(status)
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        console.log('IMG START...');
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({updateimg:true})
                this.setState({
                    image: result.uri,
                    uri: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };


    render() {
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%') }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
                            <TouchableOpacity style={{ width: '30%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.back} source={require('./../image/icon/back.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>EDIT PROFILE</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: wp('18%'), alignContent: 'center', alignItems: 'center' }}>
                            <KeyboardAvoidingView behavior="padding">

                                {this.state.uri == '' || this.state.uri == null ?
                                    <TouchableOpacity onPress={this._pickImage}>
                                        {this.state.image == '' || this.state.image == null ?
                                            <Image style={styles.imgpicker} source={require('./../image/icon/imgpicker.png')} />
                                            :
                                            <Image style={{ width: 150, height: 150, borderRadius: 100, alignSelf: 'center' }} source={{ uri: 'http://103.204.131.97:8767' + this.state.image }} />
                                        }
                                    </TouchableOpacity>
                                    :
                                    <>
                                    <TouchableOpacity onPress={this._pickImage}>
                                        <Image style={{ width: 150, height: 150, borderRadius: 100, alignSelf: 'center' }} source={{ uri: this.state.uri }} />
                                    </TouchableOpacity>
                                    </>
                                }


                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: 40 }}>FIRST NAME</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'FirstName'}
                                        value={this.state.firstname}
                                        onChangeText={firstname => this.setState({ firstname })}

                                    />
                                </View>
                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: 40 }}>LAST NAME</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'LastName'}
                                        value={this.state.lastname}
                                        onChangeText={lastname => this.setState({ lastname })}

                                    />
                                </View>
                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: 40 }}>COUNTRY</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Country'}
                                        value={this.state.country}
                                        onChangeText={country => this.setState({ country })}

                                    />
                                </View>
                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: 40 }}>STATE</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'State'}
                                        value={this.state.state}
                                        onChangeText={state => this.setState({ state })}

                                    />
                                </View>

                            </KeyboardAvoidingView>

                            {this.state.loading == false ? null : this.renderButton()}

                            <GradientButton
                                onPress={() => this.updateProfile()}
                                text={"UPDATE"}
                                color1={'#2145FE'}
                                color2={'#2145FE'}
                                marginTop={20}
                                borderRadius={5}
                                width={300}
                                height={50}
                            />

                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 20, alignSelf: 'center' }}
                                text="UPDATE"
                                textStyle={{ fontSize: 17 }}
                                gradientBegin="#2145FE"
                                gradientEnd="#2145FE"
                                gradientDirection="diagonal"
                                height={60}
                                width={280}
                                radius={10}
                                impact
                                impactStyle='Light'
                                onPressAction={() => this.updateProfile()}
                            /> */}


                        </View>

                    </ScrollView>
                </View>


            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {
        width: 160,
        height: 35,
        marginBottom: wp('10%'),
        marginTop: 5
    },
    imgpicker: {
        width: 290,
        height: 130,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 5
    },
    search: {
        width: 40,
        height: 40,
        marginBottom: wp('10%')
    },
    back: {
        width: 30,
        height: 30,
        marginBottom: wp('5%'),
        marginLeft: 20,
        marginTop: 10
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: wp('10%'),
        margin: 10
    },
    block: {
        margin: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 10,
        padding: 10
    },
    profile: {
        width: 70,
        height: 70,
        marginBottom: wp('10%')
    },
    dot: {
        width: 25,
        height: 10,
        marginTop: wp('2%'),
        marginLeft: 5
    },
    commentimg: {
        width: 30,
        height: 30,
        // marginBottom: wp('10%')
    },
    logintext: {
        width: 300,
        height: 130,
        marginBottom: wp('10%'),
        marginTop: wp('10%'),
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
    checkboxcontainer: {
        flexDirection: "row",
        marginTop: wp('5%'),
        marginLeft: wp('5%')
    },
    checkbox: {
        alignSelf: "center",
    },
    input: {
        width: WIDTH - 85,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 15
    },
});