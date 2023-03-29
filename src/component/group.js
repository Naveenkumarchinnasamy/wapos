import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, CheckBox, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
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
export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            Password: '',
            ischecked: false,
            ads: [
                { id: 1, Image: require('./../image/icon/g1.png') },
                { id: 2, Image: require('./../image/icon/g2.png') },
                { id: 3, Image: require('./../image/icon/g3.png') },
                { id: 4, Image: require('./../image/icon/g1.png') },
                { id: 5, Image: require('./../image/icon/g2.png') },
                { id: 6, Image: require('./../image/icon/g3.png') },

            ],
        };
    }

    renderAds = ({ item }) => {
        return (
            <View>
                <Image style={styles.ads} source={item.Image} />
            </View>
        )
    }

    render() {
        const { ischecked } = this.props
        return (
            <View style={styles.container}>

                <View style={{ marginTop: wp('10%'), padding: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '50%' }}>
                                <Image style={styles.logo} source={require('./../image/icon/grouptext.png')} />
                            </View>
                            <View style={{ width: '10%', marginLeft: 10, marginRight: 10 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('creategroup')}>
                                    <Image style={styles.search} source={require('./../image/icon/plus.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '10%', marginLeft: 10, marginRight: 10 }}>
                                <TouchableOpacity>
                                    <Image style={styles.search} source={require('./../image/icon/setting.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '10%', marginLeft: 10, marginRight: 10 }}>
                                <TouchableOpacity>
                                    <Image style={styles.search} source={require('./../image/icon/search.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'white', marginTop: 0 }}>

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                <FlatList
                                    pagingEnabled
                                    horizontal
                                    data={this.state.ads}
                                    renderItem={this.renderAds}
                                    keyExtractor={item => item.id}
                                />
                            </ScrollView>

                        </View>

                        <Text style={{ fontSize: 22, marginTop: 35, fontWeight: 'bold' }}>Suggested For You</Text>
                        <Text style={{ fontSize: 16, marginTop: 0, marginBottom: 10 }}>Groups you might be interested in</Text>

                        <View style={styles.block}>
                            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' }} />
                            <Text style={{ fontSize: 18, padding: 10, marginTop: 0, fontWeight: 'bold' }}>Health Tips</Text>
                            <Text style={{ fontSize: 14, padding: 10, color: '#8f92a1', paddingTop: 0 }}>158 Members      16 Posts a day</Text>
                            <GradientButton
                                onPress={() => this.props.navigation.navigate('#')}
                                text={"Join"}
                                color1={'#f3f3f3'}
                                color2={'#f3f3f3'}
                                marginTop={20}
                                borderRadius={10}
                                width={250}
                                height={50}
                            />
                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 20, alignSelf: 'center', marginBottom: 20 }}
                                text="Join"
                                textStyle={{ fontSize: 17, color: 'black' }}
                                gradientBegin="#f3f3f3"
                                gradientEnd="#f3f3f3"
                                gradientDirection="diagonal"
                                height={50}
                                width={250}
                                radius={10}
                                impact
                                impactStyle='Light'
                                onPressAction={() => this.props.navigation.navigate('#')}
                            /> */}
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '25%' }}>
                                    <Image style={styles.profile} source={require('./../image/icon/dish.jpg')} />
                                </View>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Essential Tips to Follow</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: -5 }}>
                                        <View style={{ width: '85%' }}>
                                            <Text style={{ fontSize: 12, padding: 10, color: '#8f92a1', paddingTop: 0, paddingLeft: 5 }}>62 Members   9 Posts a day</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '10%' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.dot} source={require('./../image/icon/join.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingTop: 0 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '25%' }}>
                                    <Image style={styles.profile} source={require('./../image/icon/dish.jpg')} />
                                </View>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Essential Tips to Follow</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: -5 }}>
                                        <View style={{ width: '85%' }}>
                                            <Text style={{ fontSize: 12, padding: 10, color: '#8f92a1', paddingTop: 0, paddingLeft: 5 }}>62 Members   9 Posts a day</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '10%' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.dot} source={require('./../image/icon/join.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingTop: 0 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '25%' }}>
                                    <Image style={styles.profile} source={require('./../image/icon/dish.jpg')} />
                                </View>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Essential Tips to Follow</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: -5 }}>
                                        <View style={{ width: '85%' }}>
                                            <Text style={{ fontSize: 12, padding: 10, color: '#8f92a1', paddingTop: 0, paddingLeft: 5 }}>62 Members   9 Posts a day</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '10%' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.dot} source={require('./../image/icon/join.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <Text style={{ fontSize: 22, marginTop: 35, fontWeight: 'bold' }}>Friend's Group</Text>
                        <Text style={{ fontSize: 16, marginTop: 0, marginBottom: 10 }}>Groups your friends are in</Text>

                        <View style={styles.block}>
                            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' }} />
                            <Text style={{ fontSize: 18, padding: 10, marginTop: 0, fontWeight: 'bold' }}>Restaurant</Text>
                            <Text style={{ fontSize: 14, padding: 10, color: '#8f92a1', paddingTop: 0 }}>158 Members      16 Posts a day</Text>
                            <GradientButton
                                onPress={() => this.props.navigation.navigate('#')}
                                text={"Join"}
                                color1={'#f3f3f3'}
                                color2={'#f3f3f3'}
                                marginTop={20}
                                borderRadius={10}
                                width={250}
                                height={50}
                            />
                            {/* <GradientButton
                                style={{ marginVertical: 8., marginTop: 20, alignSelf: 'center', marginBottom: 20 }}
                                text="Join"
                                textStyle={{ fontSize: 17, color: 'black' }}
                                gradientBegin="#f3f3f3"
                                gradientEnd="#f3f3f3"
                                gradientDirection="diagonal"
                                height={50}
                                width={250}
                                radius={10}
                                impact
                                impactStyle='Light'
                                onPressAction={() => this.props.navigation.navigate('#')}
                            /> */}
                        </View>

                        <View style={{ paddingTop: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '25%' }}>
                                    <Image style={styles.profile} source={require('./../image/icon/dish.jpg')} />
                                </View>
                                <View style={{ width: '60%' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Essential Tips to Follow</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: -5 }}>
                                        <View style={{ width: '85%' }}>
                                            <Text style={{ fontSize: 12, padding: 10, color: '#8f92a1', paddingTop: 0, paddingLeft: 5 }}>62 Members   9 Posts a day</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '10%' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.dot} source={require('./../image/icon/join.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        width: 110,
        height: 35,
        marginBottom: wp('10%')
    },
    ads: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: wp('0%'),
        borderRadius: 15,
        marginRight: 5
    },
    img: {
        width: '100%',
        height: 180,
        alignSelf: 'center',
        marginTop: wp('0%'),
        borderRadius: 15,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    search: {
        width: 40,
        height: 40,
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

    },
    profile: {
        width: 60,
        height: 60,
        marginBottom: wp('10%'),
        borderRadius: 15
    },
    dot: {
        width: 55,
        height: 35,
        marginTop: wp('3%'),
        marginLeft: -10
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