import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import Header from '../Components/Header';
import Exclus from '../Components/Exclus';
class SecondScreen extends Component {
  render() {
    return (
      <View>
        <Header/>
            <View>
              <Exclus/>
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