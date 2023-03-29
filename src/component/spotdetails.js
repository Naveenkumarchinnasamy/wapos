
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity, Modal,  Alert, Share, FlatList } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from "moment";
import GradientButton from '../utils/GradientButton';

export default class spotdetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            uid: '',
            title: '',
            description: '',
            image: '',
            date: '',
            icon: '',
            share: '',
            likes: '',
            comments: '',
            showMe: false,
            USERID: '',
            USERIMG: '',
            Comment: '',
            height: 40,
            Comments: [],
        };
    }

    updateSize = (height) => {
        this.setState({
            height
        });
    }

    onShare = async () => {

        try {
            const result = await Share.share({
                message: `Image: http://spot.tradingdevelopmentsystem.com/${this.state.image} \n\n Title: ${this.state.title} \n\n Description: ${this.state.description} `,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    this.Shared();
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    return() {
        return;
    }

    alertdel() {
        Alert.alert(
            'ARE YOUR SURE TO DELETE THIS POST?',
            '',
            [
                { text: 'NO', onPress: () => this.return(), style: 'cancel' },
                { text: 'YES', onPress: () => this.deletePost() },
            ]
        );
    }

    navigate(ID) {
        this.setState({ showMe: false });
        this.props.navigation.navigate('updatePost', { POSTID: ID })
    }

    renderComments = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{ width: '22%', flexDirection: 'row' }}>
                    {item.userimg == '' || item.userimg == null || item.userimg == 'null' ?
                        <Image style={{ width: 75, height: 75, marginTop: 5 }} source={require('./../image/icon/userimg.png')} />
                        :
                        <Image style={{ width: 60, height: 60, marginTop: 12, borderRadius: 50 }} source={{ uri: `http://spot.tradingdevelopmentsystem.com/${item.userimg}` }} />
                    }
                </View>
                <View style={{ width: '58%', backgroundColor: '#F3F3F3', borderRadius: 10, padding: 10 }}>
                    <Text style={{ margin: 5, color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{item.username}</Text>
                    <Text style={{ margin: 5, color: '#8E8E8E', fontSize: 15, marginTop: 0, marginLeft: 5 }}>{item.comment}</Text>
                </View>
            </View>
        )
    }
    render() {
        console.log('UID:  ' + this.state.USERID, 'USER ID: ' + this.state.uid)
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%') }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
                            <TouchableOpacity style={{ width: '28%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                <Image style={styles.back} source={require('./../image/icon/back.png')} />
                            </TouchableOpacity>
                            <View style={{ width: '50%', marginLeft: 10, marginRight: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>SPOT DETAILS</Text>
                                </View>
                            </View>
                            {this.state.uid == this.state.USERID ?
                                <TouchableOpacity onPress={() => this.setState({ showMe: true })} style={{ width: '28%', marginTop: 24 }}>
                                    <Image style={{ width: 30, height: 10, }} source={require('./../image/icon/dot.png')} />
                                </TouchableOpacity>
                                :
                                null
                            }

                        </View>


                        <View style={{ padding: 20 }}>
                            <Text style={{ color: '#8E8E8E', fontSize: 16, marginTop: 10, marginLeft: 10 }}>{moment(this.state.date).format('h:mm A, MMMM Do YYYY ')}</Text>

                            <View style={{ marginTop: 30 }}>
                                <ImageBackground imageStyle={{ borderRadius: 20 }} source={{ uri: `http://spot.tradingdevelopmentsystem.com/${this.state.image}` }} style={{ width: '100%', height: 200, }} >
                                    <Image style={{ width: 45, height: 60, alignSelf: 'flex-end', marginTop: -30, marginRight: 15 }} source={{ uri: this.state.icon }} />
                                </ImageBackground>
                            </View>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 25 }}>{this.state.title}</Text>

                            <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 25, color: '#8E8E8E' }}>{this.state.description}</Text>

                            <View style={{ borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginTop: 30, paddingBottom: 10 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 0, marginTop: 10 }}>
                                    <View style={{ width: '28%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.Like()}>
                                            <Image style={{ width: 30, height: 30, marginTop: 2 }} source={require('./../image/icon/like.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 15, marginTop: 10, marginLeft: 13, fontWeight: 'bold' }}>{this.state.likes}</Text>
                                    </View>
                                    <View style={{ width: '28%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.onShare()}>
                                            <Image style={{ width: 35, height: 35 }} source={require('./../image/icon/share.png')} />
                                        </TouchableOpacity>

                                        <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 15, marginTop: 10, marginLeft: 5, fontWeight: 'bold' }}>{this.state.share}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 20, paddingBottom: 15 }}>Comments</Text>
                            </View>

                            <FlatList
                                data={this.state.Comments}
                                renderItem={this.renderComments}
                                keyExtractor={item => item.id}
                            />

                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{ width: '22%', flexDirection: 'row' }}>
                                    {this.state.USERIMG == '' || this.state.USERIMG == null || this.state.USERIMG == 'null' ?
                                        <Image style={{ width: 70, height: 70, marginTop: 5 }} source={require('./../image/icon/userimg.png')} />
                                        :
                                        <Image style={{ width: 60, height: 60, marginTop: 12, borderRadius: 50 }} source={{ uri: `http://spot.tradingdevelopmentsystem.com/${this.state.USERIMG}` }} />
                                    }
                                </View>
                                <View style={{ width: '70%' }}>
                                    <View style={styles.firstInput}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'Write a comment...'}
                                            value={this.state.Comment}
                                            onChangeText={Comment => this.setState({ Comment })}
                                            multiline={true}
                                            onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}

                                        />
                                    </View>

                                    {this.state.Comment == '' ?
                                        null
                                        :
                                        <GradientButton
                                            onPress={() => this.Comment()}
                                            text={"POST"}
                                            color1={'#2145FE'}
                                            color2={'#2145FE'}
                                            borderRadius={10}
                                            width={220}
                                            height={40}
                                            marginTop={5}
                                        />
                                        // <GradientButton
                                        //     style={{ marginVertical: 8., marginTop: 5, alignSelf: 'center' }}
                                        //     text="POST"
                                        //     textStyle={{ fontSize: 14 }}
                                        //     gradientBegin="#2145FE"
                                        //     gradientEnd="#2145FE"
                                        //     gradientDirection="diagonal"
                                        //     height={40}
                                        //     width={220}
                                        //     radius={10}
                                        //     impact
                                        //     impactStyle='Light'
                                        //     onPressAction={() => this.Comment()}
                                        // />
                                    }

                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>

                <Modal
                    transparent={true}
                    visible={this.state.showMe}
                    onRequestClose={() => this.setState({ showMe: false })}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '80%' }}></View>
                        <View style={{ backgroundColor: '#fff', height: '20%' }}>
                            <View style={{ padding: 10, flex: 1, flexDirection: 'row' }}>

                                <TouchableOpacity onPress={() => this.navigate(this.state.id)} style={{ width: '47%', marginTop: 25 }} >
                                    <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={require('./../image/icon/edit.png')} />
                                    <Text style={{ alignSelf: 'center', color: '#000', fontSize: 15, marginTop: 10 }}>Edit</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.alertdel()} style={{ width: '47%', marginTop: 25 }} >
                                    <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={require('./../image/icon/delete.png')} />
                                    <Text style={{ alignSelf: 'center', color: '#000', fontSize: 15, marginTop: 10 }}>Delete</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState({ showMe: false })}>
                                    <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={require('./../image/icon/cross.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>



            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
    back: {
        width: 30,
        height: 30,
        marginBottom: wp('5%'),
        marginLeft: 20,
        marginTop: 10
    },
    firstInput: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 0,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 5,
        borderWidth: 1,
        borderColor: '#858585'
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