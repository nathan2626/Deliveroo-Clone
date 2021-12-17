import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';

class Betters extends Component {
  render() {
    return (
      <View>
        <View style={styles.bigVue}>
              <Text style={styles.title}>À la une</Text>
              <Text style={styles.subTitle}>Annonces payantes de nos partenaires</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://foobe.com.ar/wp-content/uploads/2020/12/pizza-hut-scaled.jpeg'}} style={styles.imgBigCard} resizeMode="cover">
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                    <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtTime}>15-30 min</Text>
                    </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🍕 Pizza Hut</Text>
                  <Text style={styles.categoryTitleBigCard}>Italien . Pizzas</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.4 Très bien</Text>
                  <Text style={styles.likeBigCard}>🥰 16 personnes ont aimé</Text>
                  <Text style={styles.promoBigCard}>Commandez pour 25 €, profitez de -25%</Text>
                </View>
              </Card>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={require('../assets/bk.png')} style={styles.imgBigCard} resizeMode="cover">
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                        <Text style={styles.txtTime}>5-10 min</Text>
                      </View>
                  </View>
                </ImageBackground>
                
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🍔 Burger King</Text>
                  <Text style={styles.categoryTitleBigCard}>Fast-food . Burgers</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.4 Très bien</Text>
                  <Text style={styles.kmBigCard}>📍 à 1.2 km . 3 € de livraison</Text>
                </View>
              </Card>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://b.zmtcdn.com/data/pictures/2/16512172/9410759d611db9c62c3acc23c1f27e06.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                        <Text style={styles.txtTime}>5-10 min</Text>
                      </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🐥 KFC</Text>
                  <Text style={styles.categoryTitleBigCard}>Fast-Food . Poulet</Text>
                  <Text style={styles.evalBigCard}>⭐️ 3.9 Bien</Text>
                  <Text style={styles.likeBigCard}>🥰 44 personnes ont aimé</Text>
                  <Text style={styles.kmBigCard}>📍 à 1.23 km . 2.99 € de livraison</Text>
                </View>
              </Card>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://pbs.twimg.com/media/B6HYx2-CcAA5juW?format=jpg&name=small'}} style={styles.imgBigCard} resizeMode="cover">
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                        <Text style={styles.txtTime}>5-10 min</Text>
                      </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🥪 Subway</Text>
                  <Text style={styles.categoryTitleBigCard}>Fast-Food . Sandwich</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.6 Très bien</Text>
                  <Text style={styles.likeBigCard}>🥰 100 personnes ont aimé</Text>
                  <Text style={styles.kmBigCard}>📍 à 0.98 km . 2.49 € de livraison</Text>
                </View>
              </Card>
            </ScrollView>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 26,
    color: "aeaeae",    
  },
  subTitle: {
    fontSize: 15,
  },
  bigVue: {
    flexDirection: "column",
    paddingLeft: 18
  },
  bigCard: {
    width: 320,
    height: 320,
    borderWidth: 0,
    padding: 0,
    borderRadius: 10,
    margin:5
  },
  imgBigCard:{
    width: '100%',
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    flexDirection: "column",
    justifyContent: 'flex-end',
    margin: 'auto',
    textAlign: 'center'
  },
  titleBigCard:{
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 12,
    paddingLeft: 10

  },
  categoryTitleBigCard:{
    fontStyle: 'italic',
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 5,
  },
  evalBigCard:{
    fontSize: 16,
    paddingLeft: 10,
    color: '#00c2b3',
    marginTop: 5,
  },
  likeBigCard:{
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 5,
  },
  promoBigCard:{
    fontSize: 16,
    paddingLeft: 10,
    color: 'red',
    marginTop: 5,
  },
  kmBigCard:{
    color: 'gray',
    fontSize: 16,
    paddingLeft: 10,
  },
  txtTime: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  });

  export default Betters;