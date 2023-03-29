
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList, Dimensions, TouchableOpacity, TextInput, Alert, ImageBackground } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import moment from "moment";
var radio_props = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
];
export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            Password: '',
            ischecked: false,
            Categories: [
                { id: 1, Name: 'Natural' },
                { id: 2, Name: 'News & Politics' },
                { id: 3, Name: 'Entertaintment' },
                { id: 4, Name: 'Natural' },
                { id: 5, Name: 'News & Politics' },
                { id: 6, Name: 'Entertaintment' },
            ],
            Blogs: []
        };
    }

    renderCategories = ({ item }) => {
        return (

            <TouchableOpacity style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', borderWidth: 1, borderColor: '#01cc34', color: '#01cc34', padding: 10, borderRadius: 10 }}>
                    {item.Name}
                </Text>
            </TouchableOpacity>

        )
    }
    renderBlogs = ({ item }) => {
        return (
            <View style={{ marginTop: 10 }}>
                <ImageBackground source={require('./../image/icon/blogimg.jpg')} style={{ width: '100%', height: 240 }} resizeMode='stretch'>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '65%' }}></View>
                        <View style={{ width: '35%' }}>
                            <View style={{ backgroundColor: 'black', borderRadius: 15, margin: 20 }}>
                                <Text style={{ padding: 10, color: 'white', textAlign: 'center' }}>{item.category}</Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>

                <View style={styles.block1}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 25 }}>{item.title}</Text>
                    <Text style={{ fontSize: 15, padding: 25, color: '#8f92a1', paddingTop: 0 }}>{item.description}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '60%', flexDirection: 'row', paddingLeft: 20, paddingTop: 0, paddingBottom: 30 }}>
                            <Image style={{ width: 20, height: 20, margin: 5 }} source={require('./../image/icon/timeicon.png')} />
                            <Text style={{ margin: 5, color: '#01cc34' }}>{moment(item.date).format('MMMM Do YYYY')}</Text>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'row', paddingLeft: 0, paddingTop: 0, paddingBottom: 30 }}>
                            <Image style={{ wicdth: 19, height: 20, margin: 5, marginRight: -2, marginLeft: 5 }} source={require('./../image/icon/commenticon.png')} />
                            <Text style={{ margin: 5, color: '#01cc34' }}>By {item.user_name}</Text>
                        </View>
                    </View>

                </View>

            </View>

        )
    }
    componentDidMount() {
        this.getData();

        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            this.getData();
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    getData = async () => {
        console.log('hello')



        // console.log('TOKEN: '+ accesstoken, 'UID: ' + uid, 'CLIENT: '+ client)

        fetch('https://you-online-api.herokuapp.com/api/v1/user/blogs', {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'access-token': accesstoken,
                'uid': uid,
                'client': client
            }
        }).then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson)
                this.setState({ Blogs: responseJson.blogs })

            })
            .catch((error) => {
                alert(error);
            });
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: wp('10%'), padding: 30 }}>


                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '60%' }}>
                                <Image style={styles.logo} source={require('./../image/icon/blogtext.png')} />
                            </View>
                            <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('createblog')}>
                                    <Image style={styles.create} source={require('./../image/icon/create.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '100%', backgroundColor: '#f6f6f6', borderRadius: 10, padding: 5 }}>
                            <KeyboardAvoidingView behavior={'padding'}>
                                <View style={styles.firstInput}>
                                    <Image style={styles.icon} source={require('./../image/icon/searchicon.png')} />
                                    <TextInput
                                        placeholderTextColor='#9e9e9e'
                                        style={styles.searchInput}
                                        placeholder={'Search for article'}
                                        // containerStyle={{ marginVertical: '5%' }}
                                        value={this.state.keyword}
                                        onChangeText={keyword => this.setState({ keyword })}
                                        onSubmitEditing={() => this.search()}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                <FlatList
                                    pagingEnabled
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.Categories}
                                    renderItem={this.renderCategories}
                                    keyExtractor={item => item.id}
                                />
                            </ScrollView>
                        </View>


                    </View>

                    <View style={{ marginTop: -20 }}>
                        <ScrollView >
                            <FlatList
                                data={this.state.Blogs}
                                renderItem={this.renderBlogs}
                                keyExtractor={item => item.id}
                            />
                        </ScrollView>
                    </View>


                    {/* <View>
                        <Image style={{ width: '100%', height: 230 }} source={require('./../image/icon/blogimg.jpg')} />
                        <View style={{ backgroundColor: 'white', margin: 10, borderRadius: 10 }}>
                            <Text>hello</Text>
                        </View>
                    </View> */}



                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {
        width: 80,
        height: 35,
        marginBottom: wp('10%'),
        marginTop: 5
    },
    block1: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        marginTop: -70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    search: {
        width: 40,
        height: 40,
        marginBottom: wp('10%')
    },
    create: {
        width: 110,
        height: 45,
        marginBottom: wp('10%')
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 7,
        marginTop: 3
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
        marginTop: 0,
        marginHorizontal: 10,
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