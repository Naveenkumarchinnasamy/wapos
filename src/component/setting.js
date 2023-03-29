
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, Switch } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
// import { Switch } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class setting extends React.Component {
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
                                <TouchableOpacity style={{ width: '34%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                                    <Image style={styles.back} source={require('./../image/icon/back.png')} />
                                </TouchableOpacity>
                                <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>SETTINGS</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ padding: 20 }}>
                                <View style={{ backgroundColor: '#2145FE' }}>
                                    <Text style={{ padding: 15, color: '#ffffff', fontSize: 17 }}>Notification</Text>
                                </View>
                                <View style={styles.tab}>
                                    <View style={{ width: '85%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>Push Notification</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Switch
                                            style={styles.switchAlignStyle}
                                            value={this.state.driverActiveStatus}
                                            trackColor={{ false: "#2145FE", true: "#2145FE" }}
                                            thumbColor={this.state.driverActiveStatus ? "#ffffff" : "#ffffff"}
                                            onValueChange={() => {
                                                this.onChangeFunction(this.state.driverActiveStatus);
                                            }}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.tab2}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>Notification Sound</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={{ width: 15, height: 15, marginTop: 18 }} source={require('./../image/icon/sidearrow.png')} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ backgroundColor: '#2145FE' }}>
                                    <Text style={{ padding: 15, color: '#ffffff', fontSize: 17 }}>Account</Text>
                                </View>
                                <TouchableOpacity style={styles.tab}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>Account Information</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={{ width: 15, height: 15, marginTop: 18 }} source={require('./../image/icon/sidearrow.png')} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ backgroundColor: '#2145FE' }}>
                                    <Text style={{ padding: 15, color: '#ffffff', fontSize: 17 }}>Application</Text>
                                </View>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Terms')} style={styles.tab2}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>Terms & Condition</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={{ width: 15, height: 15, marginTop: 18 }} source={require('./../image/icon/sidearrow.png')} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Privacy')} style={styles.tab2}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>Privacy</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={{ width: 15, height: 15, marginTop: 18 }} source={require('./../image/icon/sidearrow.png')} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Faq')} style={styles.tab2}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{ padding: 15, color: '#000', fontSize: 17 }}>FAQ's</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={{ width: 15, height: 15, marginTop: 18 }} source={require('./../image/icon/sidearrow.png')} />
                                    </View>
                                </TouchableOpacity>
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