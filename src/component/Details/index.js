import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default class Details extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.mainimg} source={require('../../../assets/uberx.png')}/>
                <Text style={styles.maintitletext}>RIDE</Text>
                <Text style={styles.maintitledes}>350 PKR</Text>

                <Button style={styles.mainbutton}  mode="contained" onPress={() => console.log('Pressed')}>
                   <Text style={styles.mainbuttontext}>CONFIRM</Text>
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       backgroundColor:'#FFF',
       height:230,
       width:'100%',
       position:"absolute",
       bottom:0,
       elevation:3,
       borderWidth:1,
       borderColor:'#DDD',
       alignItems:'center',
       padding:20
},
   maintitletext:{
       fontSize:20,
       color:'#222'
},
   maintitledes:{
    fontSize:14,
    color:'#666'
},
mainimg:{
    height:80,
    margin:10
},
mainbutton:{
    backgroundColor:'#222',
    justifyContent:'center',
    alignItems:'center',
    height: 44,
    alignSelf:'stretch',
    marginTop:10

},
mainbuttontext:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:15
}


  });