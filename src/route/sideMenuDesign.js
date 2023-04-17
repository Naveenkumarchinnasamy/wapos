import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { height } from 'react-native-dimension';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_URL_IMAGE } from '../api/constants';
export default class sideMenuDesign extends Component {
  constructor(props) {
    super(props);
      this.state={
        firstName:'',
        lastName:'',
        profile:''
      }
  }
componentDidMount = async()=>{
  console.log("called")
  this.setState({firstName: await AsyncStorage.getItem('currentUserFirstName')});
  this.setState({lastName:await AsyncStorage.getItem('currentUserLastName')});
  this.setState({profile:Base_URL_IMAGE+await AsyncStorage.getItem('currentUserImage')});
}
  logout = () => {

    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('login')
      AsyncStorage.removeItem('currentUserFirstName');
      AsyncStorage.removeItem('currentUserLastName');
      AsyncStorage.removeItem('currentUserImage');
      AsyncStorage.removeItem('currentUserFirebaseToken');
      AsyncStorage.removeItem('currentUserFirebaseID');
      AsyncStorage.removeItem('currentUserID');
      AsyncStorage.removeItem('currentUserEmail');
      AsyncStorage.removeItem('currentUserCountry');
      AsyncStorage.removeItem('currentUserStates');
      AsyncStorage.removeItem('currentUserRating');
      AsyncStorage.removeItem('currentUserStatus');
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
          <Image style={{ width: 20, height: 20, marginTop: 50, marginBottom: 0, alignSelf: 'flex-end', marginRight: 20, marginBottom: 30 }} source={require('./../image/icon/crossmenu.png')} />
        </TouchableOpacity>

        <View style={{ backgroundColor: '#ffffff', padding: 10, flexDirection: 'row', marginTop: wp('-5%'), marginLeft: wp('5%') }}>

          <Image style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center' }} source={{uri:this.state.profile}} />
          <View style={{ marginTop: 0, }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, color: '#44c7f3', fontWeight: 'bold', marginLeft: 10 }}>{this.state.firstName} {this.state.lastName}</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('editprofile')}}>
              <Text style={{ alignSelf: 'center', fontSize: 18, color: '#44c7f3', marginLeft: 10, marginTop: 2 }}>Edit profile</Text>
            </TouchableOpacity>
          </View>

        </View>

        <ScrollView style={{ marginTop: 0 }}>

          {/* <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chatpage') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s1.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Active chats</Text>
              </View>
            </TouchableOpacity>
          </View> */}
          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Buyerchat') } style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s1.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Buyer chats</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sellerchat') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s1.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Seller chats</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('notification') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s2.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Notifications</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('opendeals') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s3.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Open deals</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('dealshistory2') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s4.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Deals history</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('flightdetail') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10, marginTop: 5 }} source={require('../image/icon/s5.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Flight details</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => { this.logout() }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/logout.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingLeft: 55 }}>
              <Image style={{ width: 23, height: 23, marginRight: 10, marginTop: 2 }} source={require('../image/icon/gear.png')} />
              <Text style={{ color: '#44c7f3', fontSize: 18, textAlign: 'center', marginBottom: 20 }}>Account settings</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


