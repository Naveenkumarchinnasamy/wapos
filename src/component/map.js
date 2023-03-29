import React, { Fragment } from 'react';
import { StyleSheet, Modal, Text, View, ScrollView, TextInput, Image, Dimensions, TouchableOpacity, BackHandler } from 'react-native';
import { MaterialIcons, Feather, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Search from './Search/index';
import Searchfrom from './Searchfrom';
import Directions from './Directions';
import Geocoder from 'react-native-geocoding';
import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import getDirections from 'react-native-google-maps-directions';
Geocoder.init("AIzaSyA58fEHCI9rjDH8dRkh-F78tR-VnFakKb4");


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            region: null,
            lon: '',
            lat: '',
            plat: '',
            plon: '',
            // coordinates: [],
            marginBottom: 1,
            region: null,
            coordinates: [
                { name: '1', latitude: 30.1744, longitude: 71.4789 },
                { name: '2', latitude: 30.1944, longitude: 71.4989 },
                { name: '3', latitude: 30.2144, longitude: 71.5189 },
                { name: '4', latitude: 30.2344, longitude: 71.5389 },
                { name: '5', latitude: 30.2544, longitude: 71.5589 }
            ],
            Posts: [],
            fromlocation: '',
            Location: null,
            destination: null,
            duration: null,
            distance: null,
            fromlocation: '',
            toLocation: '',
            showMe: false,
            spot: [],
        }
    }


    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign
                name='home'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }

    getPermissionAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION)
        console.log(status)
        if (status !== 'granted') {
            alert('Hey! You might want to enable Location for my app, they are good.');
        } else {

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            let latitude = location.coords.latitude
            let longitude = location.coords.longitude

            const response = await Geocoder.from({ latitude, longitude });
            const address = response.results[0].formatted_address;
            const Llocation = address.substring(0, address.indexOf(','));

            this.setState({
                mylat: latitude,
                mylon: longitude,
                fromlocation: address,
                Location: Llocation,
                region:
                {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                }
            });
        }


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


    handleLocationSelectedfrom = (data, { description }) => {

        Geocoder.init("AIzaSyA58fEHCI9rjDH8dRkh-F78tR-VnFakKb4");

        Geocoder.from(description)
            .then(json => {
                var locationlat = json.results[0].geometry.location;
                var locationlat2 = data.structured_formatting.main_text;

                console.log('FROM: ' + locationlat.lat + locationlat.lng);

                this.setState({
                    lat: locationlat.lat,
                    lon: locationlat.lng,
                    region:
                    {
                        latitude: locationlat.lat,
                        longitude: locationlat.lng,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    },
                    fromlocation: locationlat2
                })
            })
            .catch(error => console.warn(error));

    }

    handleLocationSelected = (data, { description }) => {

        Geocoder.init("AIzaSyA58fEHCI9rjDH8dRkh-F78tR-VnFakKb4");

        Geocoder.from(description)
            .then(json => {
                var locationlat = json.results[0].geometry.location;
                var locationlat2 = data.structured_formatting.main_text;

                console.log('TO: ' + locationlat.lat + locationlat.lng);

                this.setState({
                    plat: locationlat.lat,
                    plon: locationlat.lng,
                    toLocation: description,
                    destination: {
                        latitude: locationlat.lat,
                        longitude: locationlat.lng,
                        title: locationlat2,
                    },
                })
            })
            .catch(error => console.warn(error));

    }

    handleGetDirections = () => {

        let MYLAT = this.state.lat;
        let MYLON = this.state.lon;
        let PLAT = this.state.plat;
        let PLON = this.state.plon;

        console.log('FROM: ' + MYLAT + MYLON, 'TO: ' + PLAT + PLON);

        const data = {
            source: {
                latitude: MYLAT,
                longitude: MYLON
            },
            destination: {
                latitude: PLAT,
                longitude: PLON
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"
                },
                {
                    key: "dir_action",
                    value: "navigate"
                }
            ],

        }

        getDirections(data)
    }

    handleBack = () => {
        this.setState({
            destination: null,
        });
    }

    navigate(ID) {
        this.setState({ showMe: false });
        this.props.navigation.navigate('Spotdetails', { POSTID: ID });
    }

    render() {
        const { region, destination, duration, spot, distance, Posts } = this.state;
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1, marginTop: wp('10%') }}>
                    <TouchableOpacity style={{ width: '42%', marginTop: 6 }}>
                        {/* <Image style={styles.back} source={require('./../image/icon/back.png')} /> */}
                    </TouchableOpacity>
                    <View style={{ width: '37%', marginLeft: 10, marginRight: 10, marginTop: -10 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>MAP</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Addspot')} style={{ width: '28%', marginTop: 0, marginBottom: 12, }}>
                        <Image style={{ width: 30, height: 30, }} source={require('./../image/icon/locationplus.png')} />
                    </TouchableOpacity>
                </View>

                <MapView
                    style={{ flex: 1, marginBottom: this.state.marginBottom }}
                    initialRegion={region}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    // loadingEnabled
                    onMapReady={() => this.setState({ marginBottom: 0 })}
                    ref={el => this.mapView = el}
                >
                    {
                        this.state.Posts.map(item => (
                            <MapView.Marker
                                key={item.title}
                                coordinate={{
                                    latitude: parseFloat(item.lat),
                                    longitude: parseFloat(item.lon)
                                }}
                                // title={item.title}
                                // description={JSON.stringify(item.photos[0].photo_reference)}
                                onPress={() => this.setState({ spot: item, showMe: true })}
                            >
                                <Image
                                    source={require('./../image/icon/marker.png')}
                                    style={{ width: 35, height: 35 }}
                                />

                            </MapView.Marker>
                        ))
                    }
                    {
                        destination && (
                            <Fragment>
                                <Directions
                                    origin={region}
                                    destination={destination}
                                    onMapReady={() => this.setState({ marginBottom: 0 })}
                                    onReady={result => {
                                        this.setState({ duration: Math.floor(result.duration), distance: result.distance });
                                        this.mapView.fitToCoordinates(result.coordinates, {
                                            edgePadding: {
                                                right: 50,
                                                left: 50,
                                                top: 50,
                                                bottom: 50,
                                            }
                                        });
                                    }}
                                />
                                <Marker coordinate={destination} anchor={{ x: 0, y: 0 }} image={markerImage}>
                                    <View style={styles.locationbox}>
                                        <View style={styles.locationtimebox}>
                                            <Text style={styles.locationtimetext}>{duration}</Text>
                                            <Text style={styles.locationtimetextsmall}>MIN</Text>
                                        </View>
                                        <Text style={styles.locationtitle}>{destination.title}</Text>
                                        <View style={styles.locationtimebox}>
                                            <Text style={styles.locationtimetext}>{distance}</Text>
                                            <Text style={styles.locationtimetextsmall}>KM</Text>
                                        </View>
                                    </View>
                                </Marker>
                            </Fragment>
                        )
                    }
                </MapView>

                {this.state.showMe == false ?
                    null
                    :
                    <TouchableOpacity onPress={() => this.navigate(spot.id)} style={styles.card}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '22%', flexDirection: 'row' }}>
                                {spot.userimg == null || spot.userimg == '' ?
                                    <Image style={{ width: 70, height: 70 }} source={require('./../image/icon/userimg.png')} />
                                    :
                                    <Image style={{ width: 55, height: 55, borderRadius: 50 }} source={{ uri: 'http://spot.tradingdevelopmentsystem.com/' + spot.userimg }} />
                                }
                            </View>
                            <View style={{ width: '65%', }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('userprofile', { USERID: spot.userid })}>
                                    <Text style={{ margin: 5, color: '#000000', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>{spot.username}</Text>
                                </TouchableOpacity>
                                <Text numberOfLines={2} style={{ margin: 5, color: '#A1A2A8', fontSize: 13, marginTop: 5, marginLeft: 9 }}>{spot.description}</Text>
                            </View>
                            <View style={{ width: '18%', flexDirection: 'row' }}>
                                <Image style={{ width: 45, height: 60, marginTop: -40, marginLeft: -30 }} source={{ uri: spot.icon }} />
                                <TouchableOpacity onPress={() => this.setState({ showMe: false })}>
                                    <Image style={{ width: 20, height: 20, marginTop: 0, marginLeft: 5 }} source={require('./../image/icon/cross.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 80, marginTop: 10 }}>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 20, height: 20, marginTop: 4 }} source={require('./../image/icon/comment.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{spot.comments}</Text>
                            </View>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 20, height: 20, marginTop: 2 }} source={require('./../image/icon/like.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{spot.likes}</Text>
                            </View>
                            <View style={{ width: '28%', flexDirection: 'row' }}>
                                <Image style={{ width: 25, height: 25 }} source={require('./../image/icon/share.png')} />
                                <Text style={{ margin: 5, color: '#A1A2A8', fontSize: 12, marginTop: 5, marginLeft: 9, fontWeight: 'bold' }}>{spot.share}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }

                {destination ? (
                    <Fragment>

                        <TouchableOpacity style={styles.touch} onPress={this.handleBack}>
                            <Image source={backImage} />
                        </TouchableOpacity>

                    </Fragment>
                ) : (<Searchfrom onLocationSelected={this.handleLocationSelectedfrom} />
                )}

                {destination ? (
                    <Fragment>

                        <TouchableOpacity style={styles.touch} onPress={this.handleBack}>
                            <Image source={backImage} />
                        </TouchableOpacity>

                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.handleGetDirections()} style={styles.PostAnAd}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>GET DIRECTIONS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handleBack} style={styles.PostAnAd}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>END JOURNEY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Fragment>
                ) : (
                    <Search onLocationSelected={this.handleLocationSelected} />

                )}



            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    back: {
        width: 30,
        height: 30,
        marginBottom: wp('5%'),
        marginLeft: 20,
        marginTop: 10
    },


    locationbox: {
        backgroundColor: '#fff',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 3,
        flexDirection: 'row',
        marginTop: 18,
    },
    locationtitle: {
        paddingTop: 8,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 12,
        color: '#000',
    },
    locationtimebox: {
        backgroundColor: '#2144FE',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,

    },
    locationtimetext: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    locationtimetextsmall: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    },
    touch: {
        position: 'absolute',
        top: 40,
        left: 30,
        marginTop: 5
    },

    modal: {
        backgroundColor: 'transparent',
        height: 80,
        width: '100%',
        position: "absolute",
        bottom: 0,
        // elevation: 3,
        // borderWidth: 1,
        // borderColor: '#DDD',
        alignItems: 'center',
        padding: 20
    },

    PostAnAd: {
        backgroundColor: '#2144FE',
        padding: 12,
        width: "50%",
        marginRight: 1,
        borderRadius: 50
    },
    card: {

        backgroundColor: 'white',
        margin: 10,
        position: 'absolute',
        width: '95%',
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
        padding: 10,
        bottom: 0,
        backgroundColor: "#fff",
        height: 150,

    }
});

