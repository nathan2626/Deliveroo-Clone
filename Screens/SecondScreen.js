import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import Header from '../Components/Header';
import Exclusives from '../Components/Exclusives';
class SecondScreen extends Component {
  render() {
    return (
      <View>
        <Header navigateButton={() => this.props.navigation.navigate('Home')}/>
            <View>
              <Exclusives/>
            </View>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
  title: {
    paddingBottom: 50,
  }
 
  });

  export default SecondScreen;