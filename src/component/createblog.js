
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, TextInput, Alert, Picker, ActivityIndicator } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import GradientButton from '../utils/GradientButton';
var radio_props = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
];
export default class createblog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: false,
            loading: false
        };
    }


    renderButton() {
        if (this.state.loading) {
            <View>
            </View>
        }
        return (
            <View style={{ marginTop: 15, marginBottom: 0 }}>
                <ActivityIndicator color="#00CC33" size={'large'} animating={this.state.loading} />
            </View>
        )
    };

    Post = async () => {



        const { title } = this.state;
        const { description } = this.state;
        const { category } = this.state;


        if (title == '') {

            alert("Please Enter Your Title");
            return;
        }
        else if (description == '') {
            alert("Please Enter Your Description");
            return;
        }
        else if (category == '') {
            alert("Please Select Your Category");
            return;
        }
        else {
            this.setState({ loading: true })

            console.log('start')

            fetch('https://you-online-api.herokuapp.com/api/v1/user/blogs', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'access-token': accesstoken,
                    'uid': uid,
                    'client': client
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    category: category,
                })
            }).then((response) => response.json())
                .then((responseJson) => {

                    console.log(responseJson)
                    this.setState({ loading: false })

                    if (responseJson) {
                        alert('Your Blog Has Been Posted Successfully');
                        this.setState({ title: '', description: '', category: '' })
                        return;
                    }


                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%'), padding: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ width: '10%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.back} source={require('./../image/icon/back.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                <View>
                                    <Image style={styles.logo} source={require('./../image/icon/createblog.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>
                            <KeyboardAvoidingView behavior="padding">

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold' }}>TITLE</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Name'}
                                        value={this.state.title}
                                        onChangeText={title => this.setState({ title })}

                                    />
                                </View>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: wp('6%') }}>Description</Text>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Text'}
                                        value={this.state.description}
                                        onChangeText={description => this.setState({ description })}

                                    />
                                </View>

                                <TouchableOpacity>
                                    <Image style={styles.imgpicker} source={require('./../image/icon/imgpicker.png')} />
                                </TouchableOpacity>

                                <Text style={{ color: "#88888B", fontSize: 15, marginLeft: wp('8%'), fontWeight: 'bold', marginTop: 20 }}>CATEGORY</Text>
                                <View style={styles.firstInput}>
                                    <Picker style={{ backgroundColor: '#fff', width: '100%', alignSelf: 'center', color: '#BFBFBF', marginTop: 0, marginLeft: 10 }}
                                        selectedValue={this.state.category}
                                        onValueChange={(itemValue) =>
                                            this.setState({ category: itemValue })}>
                                        <Picker.Item label="Choose category" value="" />
                                        <Picker.Item value="Lifestyle" label="Lifestyle" />
                                        <Picker.Item value="Education" label="Education" />
                                        <Picker.Item value="Fitness" label="Fitness" />
                                    </Picker>
                                </View>


                            </KeyboardAvoidingView>

                            {this.state.loading == false ? null : this.renderButton()}

                            <GradientButton
                                onPress={() => this.Post}
                                text={"Publish"}
                                color1={'#00CC33'}
                                color2={'#00CC33'}
                                marginTop={20}
                                borderRadius={10}
                                width={280}
                                height={50}
                            />

                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 20, alignSelf: 'center' }}
                                text="Publish"
                                textStyle={{ fontSize: 17 }}
                                gradientBegin="#00CC33"
                                gradientEnd="#00CC33"
                                gradientDirection="diagonal"
                                height={60}
                                width={280}
                                radius={10}
                                impact
                                impactStyle='Light'
                                onPressAction={() => this.Post()}
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
        marginTop: 20
    },
    search: {
        width: 40,
        height: 40,
        marginBottom: wp('10%')
    },
    back: {
        width: 30,
        height: 30,
        marginBottom: wp('10%')
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
        height: 40,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 15
    },
});