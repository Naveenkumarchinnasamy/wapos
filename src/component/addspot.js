
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Dimensions, TouchableOpacity, TextInput, Alert, Picker, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import GradientButton from '../utils/GradientButton';

export default class addspot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: false,
            loading: false,
            image: '',
            srcImg: '',
            uri: '',
            icon: '',

            region: null,
            lon: '',
            lat: '',
            height: 40
        };
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

    componentDidMount = async () => {
        this.getPermissionAsync();

        let location = await Location.getCurrentPositionAsync({});
        console.log('START...')
        console.log(location);
        let latitude = location.coords.latitude
        let longitude = location.coords.longitude

        this.setState({
            lat: latitude,
            lon: longitude,
            region:
            {
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
            }
        });
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
                console.log(result)
                this.setState({
                    image: result.uri,
                    srcImg: { uri: result.uri },
                    uri: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };

    updateSize = (height) => {
        this.setState({
            height
        });
    }

    createPost = async () => {

        const { title } = this.state;
        const { description } = this.state;
        const { icon } = this.state;
        const { uri } = this.state;
        const { lat } = this.state;
        const { lon } = this.state;



        if (title == '') {

            alert("Please Enter Title");
            return;
        }
        else if (description == '') {
            alert("Please Enter Description");
            return;
        }
        else if (description.length < 61) {
            alert("Please Enter Minimum 100 Characters Description");
            return;
        }
        else if (icon == '') {
            alert("Please Select Spot Type");
            return;
        }
        else if (uri == '') {
            alert("Please Select Image");
            return;
        }
        else if (lat == '') {
            alert("Please Select Location");
            return;
        }
        else if (lon == '') {
            alert("Please Select Location");
            return;
        }
        else if (userid == '') {
            alert("Please Login First!");
            return;
        }
        else if (username == '') {
            alert("Please Login First!");
            return;
        }
        else if (userimg == '') {
            alert("Please Login First!");
            return;
        }
        else {

            this.setState({ loading: true })

            console.log('start')

            this.setState({ loading: true })
            console.log('FILE UPLOAD PROCESSING....');
            const data = new FormData();


            data.append('title', title);
            data.append('description', description);
            data.append('icon', icon);
            data.append('file', {
                uri: uri,
                type: 'image/jpg',
                name: uri,
            });
            data.append('lat', lat);
            data.append('lon', lon);
            data.append('userid', userid);
            data.append('username', username);
            data.append('userimg', userimg);



            const url = `https://spot.tradingdevelopmentsystem.com/api/createPost`;
            fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: data
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    this.setState({ loading: false })
                    console.log(responseJson);


                    if (responseJson.message == "Post has been created Successfully") {
                        alert('Your Spot Has Been Publish Successfully');
                        this.props.navigation.navigate('home2');
                        return;
                    }

                })


        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%') }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
                            <TouchableOpacity style={{ width: '37%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.back} source={require('./../image/icon/back.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>ADD SPOT</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: wp('18%'), alignContent: 'center', alignItems: 'center' }}>
                            <KeyboardAvoidingView behavior="padding">

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold' }}>SPOT TITLE</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'TITLE'}
                                        value={this.state.title}
                                        onChangeText={title => this.setState({ title })}

                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>DESCRIPTION</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'SPOT DESCRIPTION'}
                                        value={this.state.description}
                                        onChangeText={description => this.setState({ description })}
                                        multiline={true}
                                        onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>SPOT TYPE</Text>
                                <View style={styles.firstInput}>
                                    <Picker style={{ color: 'black', width: '100%', height: 40, }}
                                        selectedValue={this.state.icon}
                                        onValueChange={(icon) => this.setState({ icon })}>
                                        <Picker.Item label='Select Spot Type' value='' />
                                        <Picker.Item label='Traffic Jam' value='https://spot.tradingdevelopmentsystem.com/public/icon/traffic.png' />
                                        <Picker.Item label='Fire' value='https://spot.tradingdevelopmentsystem.com/public/icon/fire.png' />
                                        <Picker.Item label='Accident' value='https://spot.tradingdevelopmentsystem.com/public/icon/accident.png' />
                                        <Picker.Item label='Heavy Rain' value='https://spot.tradingdevelopmentsystem.com/public/icon/rain.png' />
                                    </Picker>
                                </View>

                                <TouchableOpacity onPress={() => this._pickImage()}>
                                    {this.state.uri == '' ?
                                        <Image style={styles.imgpicker} source={require('./../image/icon/imgpicker.png')} />
                                        :
                                        // <Text>{JSON.stringify(this.state.uri)}</Text>
                                        <Image style={styles.imgpicker} source={{ uri: this.state.uri }} />
                                    }

                                </TouchableOpacity>



                            </KeyboardAvoidingView>

                            {this.state.loading == false ? null : this.renderButton()}

                            <GradientButton onPress={() => this.createPost()} text={'ADD SPOT'} color1={'#2145FE'} color2={'#2145FE'} marginTop={20} />

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