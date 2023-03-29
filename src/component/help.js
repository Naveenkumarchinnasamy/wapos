
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, Switch } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { Switch } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            Password: '',
            ischecked: false,
            isSwitchOn: false,
            driverActiveStatus: true
        };
    }
    onChangeFunction(data) {
        if (data == true) {
            this.setState({ driverActiveStatus: false });
        } else if (data == false) {
            this.setState({ driverActiveStatus: true });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/BG.jpg')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <View style={{ marginTop: wp('10%') }}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1, backgroundColor: '#fff' }}>
                                <TouchableOpacity style={{ width: '25%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                    <Image style={styles.back} source={require('./../image/icon/back.png')} />
                                </TouchableOpacity>
                                <View style={{ width: '60%', marginLeft: 10, marginRight: 10 }}>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>HELP & FEEDBACK</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ padding: 20 }}>
                                <Text style={{ fontSize: 23 }}>Help & Feedback</Text>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                            </View>

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
        backgroundColor: "white",
    },
    switchAlignStyle: {
        alignContent: "center",
        marginTop: 15
    },
    tab: {
        backgroundColor: '#fff', shadowColor: "#000", borderRadius: 5, flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    tab2: {
        backgroundColor: '#fff', shadowColor: "#000", borderRadius: 5, flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        marginTop: 2
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



});