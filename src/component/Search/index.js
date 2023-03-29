import React from 'react';
import { Platform, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class index extends React.Component {
  state = {
    searchFocused: false,
  }

  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;
    return (
      <GooglePlacesAutocomplete
        placeholder="Destination"
        onPress={onLocationSelected}
        query={{
          key: 'AIzaSyA58fEHCI9rjDH8dRkh-F78tR-VnFakKb4',
          language: 'en'
        }}
        textInputProps={{
          onFocus: () => { this.setState({ searchFocused: true }) },
          onBlur: () => { this.setState({ searchFocused: false }) },
          autoCapitalize: "None",
          autoCorrect: false
        }}
        listViewDisplayed={searchFocused}
        fetchDetail={true}
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ ios: 60, android: 45 }),
            width: '100%',
           
          },
          textInputContainer: {
            // marginTop:5,
            // flex: 1,
            // backgroundColor: 'transparent',
            // height: 54,
            marginHorizontal: 10,
            // borderTopWidth: 0,
            // borderBottomWidth: 0
          },
          textInput: {
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 90,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0, },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: '#DDD',
            fontSize: 15

          },
          listView: {
            borderWidth: 1,
            borderColor: '#DDD',
            backgroundColor: '#FFF',
            marginHorizontal: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0, },
            shadowRadius: 15,
            marginTop: -5
          },
          description: {
            fontSize: 16,
          },
          row: {
            padding: 20,
            height: 58
          },
        }}

      />
    );
  }
}
