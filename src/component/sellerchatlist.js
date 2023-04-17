
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, CheckBox, Dimensions, TouchableOpacity, FlatList, Alert, Picker } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getBuyerChat, getSellerChat } from '../api/helper';
import { Base_URL_IMAGE } from '../api/constants';
import Header from '../utils/Header';
import { SearchBar, ListItem } from 'react-native-elements';
export default class Sellerchat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      Password: '',
      userlist: [],
      LOGINUSERID: '',
    };
  }
componentDidMount(){
    this.getChat();
}
//  getCities=async()=> {
//     firebase.firestore().collection('chat_rooms').get()
//     .then(querySnapshot => {
//       // Access querySnapshot.docs to get the array of documents
//       const messages=[];
//       querySnapshot.docs.forEach(doc => {
//         const data = doc.data();

//         // Access data properties here
//           if(data.id==this.state.userlist[index].seller.firebase_user_uid){
//             messages.push(data);
//           }

//       });
//       const message_final=[];
//       console.log(messages,"Messagessss")
//       for (const element of messages) {
//         let image_url="";
//         let name="";
//         element.participants.forEach((imageele)=>{
// if(imageele.id==element.sender_id){
//   image_url=Base_URL_IMAGE+imageele.image;
//   name=imageele.name
// }
//         })
//      const { nanoseconds, seconds } = element.updated_at;
//         const date = new Date(seconds * 1000 + nanoseconds / 1000000);
//         message_final.push({
//           _id:element.id,
//           text: element.last_message,
//           createdAt: date,
//           user:{
//             _id: element.sender_id,
//             name: name,
//             avatar: image_url,
//         },
//     })
//       }
//       const sortedMessages = message_final.sort((a, b) => {
//         const dateA = new Date(a.createdAt);
//         const dateB = new Date(b.createdAt);
    
//         // Compare the dates based on their time
//         if (dateA.toLocaleDateString() === dateB.toLocaleDateString()) {
//           // If the messages are from the same day, compare them by time
//           const timeA = dateA.toLocaleTimeString();
//           const timeB = dateB.toLocaleTimeString();
//           return timeB.localeCompare(timeA); // Reverse the comparison for ascending order
//         } else {
//           // Group messages into "today" and "yesterday" categories
//           const today = new Date();
//           const yesterday = new Date(today);
//           yesterday.setDate(today.getDate() - 1); // Set the date to yesterday
    
//           if (dateA.toLocaleDateString() === today.toLocaleDateString()) {
//             return -1; // Sort a to a lower index if it's from today
//           } else if (dateB.toLocaleDateString() === today.toLocaleDateString()) {
//             return 1; // Sort b to a lower index if it's from today
//           } else if (dateA.toLocaleDateString() === yesterday.toLocaleDateString()) {
//             return -1; // Sort a to a lower index if it's from yesterday
//           } else if (dateB.toLocaleDateString() === yesterday.toLocaleDateString()) {
//             return 1; // Sort b to a lower index if it's from yesterday
//           } else {
//             return dateA - dateB; // Sort by date if they are not from today or yesterday
//           }
//         }
//       });
//       this.setState({messages:sortedMessages})
//       // Perform desired operations on the documents here
//     })
//     .catch(error => {
//       // Handle any errors that may occur
//     });   
//   }
  getChat = async () => {
    getSellerChat().then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson,"responseJson")
        this.setState({userlist:responseJson});
        // this.getCities();
    })
    .catch((error) => {
        console.log(error)
    });
  }
  renderItem = ({ item,index }) => (
    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Chatpage',{match_id:item.seller.firebase_user_uid,create_id:item.buyer.firebase_user_uid,
      match_image:item.seller.profile_picture,
      match_name:item.seller.first_name+item.buyer.last_name,
      create_image:item.buyer.profile_picture,
      create_name:item.buyer.first_name+item.buyer.last_name
  })}>
    <ListItem bottomDivider containerStyle={styles.listItemContainer}>
      <Image source={{uri: Base_URL_IMAGE + item.seller.profile_picture}} style={styles.avatar} />
      <ListItem.Content>
        <ListItem.Title>{item.buyer.first_name}</ListItem.Title>
        <ListItem.Subtitle>online</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
   <Header onPress={() => this.props.navigation.navigate('Search')} isHide={true} />
   <View>
   <Text style={{ alignSelf: 'center', color: 'white', fontSize: 28, marginTop: hp(-16), }}>Buyer Chats</Text>
   </View>
   <View style={{padding:wp('2%'),borderBottomColor:'white'}}>
        <SearchBar  placeholder="Search contacts..." containerStyle={styles.searchBar} />
        <FlatList
          data={this.state.userlist}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        </View>
        {/* Add other UI components or actions as needed */}
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


