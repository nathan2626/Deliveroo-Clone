import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';

class Promotions extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator='false'>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/1.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/2.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/3.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/4.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/5.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('../assets/6.png')} style={styles.imgCategory} resizeMode="cover"/>
            </Card>
          </ScrollView>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
      imgCategory: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "column",
        justifyContent: 'flex-end',
        
      },
      promoCard:{
        borderRadius: 10,
        width: 350,
        height: 180,
        borderWidth: 0,
        padding: 0,
        marginTop: 10,
        marginBottom: 10,
        marginRight: -5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.25,
        elevation: 3, 
        }

  });

  export default Promotions;