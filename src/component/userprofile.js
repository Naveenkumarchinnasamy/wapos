
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, Dimensions, TouchableOpacity, BackHandler, Share, Picker } from 'react-native';
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
export default class userprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            img: '',
            Posts: [],
            LOGINUSERID: '',
            notification_token: '',
        };
    }

    disableBackButton = () => {
        return true;
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    }

    componentDidMount = async () => {




        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {

        });

    }


    renderPosts = ({ item }) => {
        return (
            <View style={{ marginTop: 5, margin: 15, marginLeft: 0, marginBottom: 0 }}>
                <ImageBackground source={{ uri: `http://spot.tradingdevelopmentsystem.com/${item.file}` }} style={{ width: '100%', height: 300 }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Spotdetails', { POSTID: item.id, })} style={styles.block1}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '22%', flexDirection: 'row' }}>
                                {item.userimg == null || item.userimg == '' ?
                                    <Image style={{ width: 70, height: 70 }} source={require('./../image/icon/userimg.png')} />
                                    :
                                    <Image style={{ width: 55, height: 55, borderRadius: 50 }} source={{ uri: 'http://spot.tradingdevelopmentsystem.com/' + item.userimg }} />
                                }
                            </View>
                            <View style={{ width: '65%', }}>
                                <Text style={{ margin: 5, color: '#000000', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>{item.username}</Text>
                                <Text numberOfLines={2} style={{ margin: 5, color: '#A1A2A8', fontSize: 13, marginTop: 5, marginLeft: 9 }}>{item.description}</Text>
                            </View>
                            <View style={{ width: '18%', }}>
                                <Image style={{ width: 45, height: 60, marginTop: -40, marginLeft: -20 }} source={{ uri: item.icon }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 80, marginTop: 10 }}>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 20, height: 20, marginTop: 4 }} source={require('./../image/icon/comment.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{item.comments}</Text>
                            </View>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 20, height: 20, marginTop: 2 }} source={require('./../image/icon/like.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{item.likes}</Text>
                            </View>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 25, height: 25 }} source={require('./../image/icon/share.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{item.share}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%') }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{ width: '37%', marginTop: 6 }}>
                                <Image style={styles.back} source={require('./../image/icon/back.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>PROFILE</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: wp('0%'), alignContent: 'center', alignItems: 'center' }}>



                            <ImageBackground source={require('./../image/cover.jpg')} style={{ width: '100%', height: 200, borderRadius: 30 }} >
                                {this.state.img == null || this.state.img == 'null' ?
                                    <Image style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 100, borderWidth: 5, borderColor: 'white', borderRadius: 300 }} source={require('./../image/icon/profileimg.png')}></Image>
                                    :
                                    <Image style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 100, borderWidth: 5, borderColor: 'white', borderRadius: 300 }} source={{ uri: 'http://spot.tradingdevelopmentsystem.com/' + this.state.img }}></Image>
                                }
                            </ImageBackground>
                            <Text style={{ textAlign: 'center', marginTop: 60, fontSize: 25, fontWeight: 'bold', color: '#000000' }}>{this.state.name}</Text>
                            <Text style={{ textAlign: 'center', fontSize: 18, color: '#8f92a1' }}>{this.state.email}</Text>

                            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                                <View style={{ width: '70%', margin: 10, }}>
                                    {this.state.LOGINUSERID == this.state.id ?
                                        null
                                        :
                                        <GradientButton
                                            PressAction={() => this.props.navigation.navigate('Chat', { USERID: this.state.id, USERNAME: this.state.name, USERIMG: this.state.img, chatlist: 0, NOTIFICATION: this.state.notification_token })}
                                            text={"Message"}
                                            color1={'#2145FE'}
                                            color2={'#2145FE'}
                                            borderRadius={10}
                                            width={240}
                                            height={40}
                                        />
                                        // <GradientButton
                                        //     style={{ marginVertical: 8., alignSelf: 'center', marginLeft: 0 }}
                                        //     text="Message"
                                        //     textStyle={{ fontSize: 17 }}
                                        //     gradientBegin="#2145FE"
                                        //     gradientEnd="#2145FE"
                                        //     gradientDirection="diagonal"
                                        //     height={40}
                                        //     width={240}
                                        //     radius={10}
                                        //     impact
                                        //     impactStyle='Light'
                                        //     onPressAction={() => this.props.navigation.navigate('Chat', { USERID: this.state.id, USERNAME: this.state.name, USERIMG: this.state.img, chatlist: 0, NOTIFICATION: this.state.notification_token })}
                                        // />
                                    }
                                </View>

                            </View>



                            <FlatList
                                data={this.state.Posts}
                                renderItem={this.renderPosts}
                                keyExtractor={item => item.id}
                            />

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


    back: {
        width: 30,
        height: 30,
        marginBottom: wp('5%'),
        marginLeft: 20,
        marginTop: 10
    },

    block1: {
        backgroundColor: 'white',
        margin: 10,
        height: 150,
        borderRadius: 20,
        marginTop: 125,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10


    },



});