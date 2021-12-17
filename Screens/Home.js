import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Image
} from 'react-native';


import Header from '../Components/Header';
import Categories from '../Components/Categories';
import Promotions from '../Components/Promotions';
import Betters from '../Components/Betters';
import Exclus from '../Components/Exclus';
import Footer from '../Components/Footer';



class Home extends Component {

  render(){
  return (
      <View>
          <Header/>
          <View style={{height: "80%"}}>
          <ScrollView>
              <Categories navigateButton={() => this.props.navigation.navigate('SecondScreen')}/>
            <Promotions/>
            <View style={{paddingBottom: 10}}>
              <Betters/>
              <Exclus/>
            </View>
            <Footer navigateButton={() => this.props.navigation.navigate('SecondScreen')}/>
          </ScrollView> 
          </View>
      </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ecf0f1',
  },
});

export default Home ;
