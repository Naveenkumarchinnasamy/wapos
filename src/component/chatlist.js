
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, FlatList, Alert, Picker } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Chatlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      Password: '',
      chat: [],
      LOGINUSERID: '',
    };
  }



  getChat = async () => {

    fetch(`https://spot.tradingdevelopmentsystem.com/api/allusers`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
    }).then(r => r.json())
      .then(response => {

        console.log(response)

        this.setState({
          chat: response.data
        })
      })
      .catch(e => console.log(e));

    return;

    var ref = firebase.database().ref("chat").orderByChild("sender").equalTo(USERNAME);

    ref.once('value').then(snapshot => {
      var items = [];
      snapshot.forEach((child) => {
        items.push({

          toid: child.child("toid").val(),
          toname: child.child("toname").val(),
          toimg: child.child("toimg").val(),

        });
      });
      this.setState({ chat: items });
      console.log(items)
    });


  }


  render() {
    const { ischecked } = this.props
    return (
      <View style={styles.container}>

        <View style={{ marginTop: wp('10%') }}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{ flexDirection: 'row', borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
              <TouchableOpacity style={{ width: '40%', marginTop: 6 }} onPress={() => this.props.navigation.goBack(null)}>
                <Image style={styles.back} source={require('./../image/icon/back.png')} />
              </TouchableOpacity>
              <View style={{ width: '40%', marginLeft: 10, marginRight: 10 }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>CHAT</Text>
                </View>
              </View>
            </View>

            <FlatList
              data={Object.keys(this.state.chat)}
              renderItem={({ item }) =>

                this.state.LOGINUSERID == this.state.chat[item].id ?
                  null
                  :

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', { chatlist: 0, USERID: this.state.chat[item].id, USERNAME: this.state.chat[item].name, USERIMG: this.state.chat[item].profile_img, })}
                    style={{ marginTop: wp('7%'), alignContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 15, borderBottomColor: '#e1e1e1', borderBottomWidth: 1 }}>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ width: '25%' }}>
                        {this.state.chat[item].profile_img == null || this.state.chat[item].toimg == "null" ?
                          <Image style={styles.profile} source={require('./../image/icon/userimg.png')} />
                          :
                          <Image style={styles.profile} source={{ uri: 'http://spot.tradingdevelopmentsystem.com/' + this.state.chat[item].profile_img }} />
                        }

                      </View>
                      <View style={{ width: '65%', marginLeft: 10, }}>
                        <Text style={{ fontSize: 18, marginTop: 10, }}>{this.state.chat[item].name}</Text>
                      </View>
                      <View style={{ width: '15%' }}>
                        {/* <Text style={{ fontSize: 15 }}>18:12</Text> */}
                      </View>
                    </View>
                  </TouchableOpacity>

              }
              keyExtractor={item => item.id}
            />

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
    width: 180,
    height: 20,
    marginBottom: wp('10%'),
    marginTop: 12
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
    width: 66,
    height: 66,
    marginTop: -10,
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 10
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
  firstInput1: {
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
  input1: {
    width: WIDTH - 85,
    height: 120,
    padding: 10,
    marginBottom: 0,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 15
  },
});


