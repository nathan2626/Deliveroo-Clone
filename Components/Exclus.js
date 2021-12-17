import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';

class Exclus extends Component {
  render() {
    return (
      <View>
        <View style={styles.bigVue}>
              <Text style={styles.title}>Exclusivement sur Deliveroo</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://media.vogue.fr/photos/5ecb8735877822cdea1d105a/2:3/w_2560%2Cc_limit/Bouillon%2520Service%2520_%25C2%25A9Benoit%2520Linero%2520(3).jpg'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                    <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtExclu}>En exclusivité</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                    <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtTime}>10-15 min</Text>
                    </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🌭 Bouillons Services !</Text>
                  <Text style={styles.categoryTitleBigCard}>Soupe . Pâtes . Équilibré</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
                  <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
                  <Text style={styles.kmBigCard}>📍 à 1.4 km . 3.49 € de livraison</Text>
                </View>
              </Card>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://static.lexpress.fr/medias_10383/w_1811,h_1359,c_crop,x_222,y_0/w_640,h_358,c_fill,g_center/v1428482719/bibimbap-plat-typique-coreen_5316341.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                    <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtExclu}>En exclusivité</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                    <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtTime}>15-25 min</Text>
                    </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>👨🏻‍🍳 Pierre Sang - Express</Text>
                  <Text style={styles.categoryTitleBigCard}>Coréen . Asiatique . Desserts . Salades</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.8 Excellent</Text>
                  <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
                  <Text style={styles.kmBigCard}>📍 à 1.7 km . 3.49 € de livraison</Text>
                </View>
              </Card>
              <Card containerStyle={styles.bigCard}>
                <ImageBackground source={{uri:'https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/everythingyouneedtoknowaboutparisiansandwichshops5-816x408.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                    <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtExclu}>En exclusivité</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                    <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                      <Text style={styles.txtTime}>15-25 min</Text>
                    </View>
                  </View>
                </ImageBackground>
                <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                  <Text style={styles.titleBigCard}>🇮🇹 Novettino</Text>
                  <Text style={styles.categoryTitleBigCard}>Italien . Sandwichs . Desserts . Edenred</Text>
                  <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
                  <Text style={styles.likeBigCard}>🥰 58 personnes ont aimé</Text>
                  <Text style={styles.kmBigCard}>📍 à 1.7 km . 3.49 € de livraison</Text>
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
    fontWeight: '600',
    marginTop: 26,   
    paddindBottom: 20, 
    color: "aeaeae"
  },
  bigVue: {
    flexDirection: "column",
    paddingLeft: 18,
    paddingBottom: 30,
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
    marginTop: 10,
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
    marginTop: 10,
  },
  txtTime: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  txtExclu:{
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  });

  export default Exclus;