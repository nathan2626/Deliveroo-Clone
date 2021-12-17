import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground,TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

class Categories extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
        
          <TouchableOpacity onPress={this.props.navigateButton}>
            <SharedElement>
              <Card containerStyle={styles.cardCategories} onClick={this.props.navigateButton}>
                <ImageBackground source={require('../assets/burger.jpg')} style={styles.imgCategory} resizeMode="cover">
                  <Text style={styles.textCategory}>Burgers</Text>
                </ImageBackground>
              </Card>
            </SharedElement>
          </TouchableOpacity>
        

          <TouchableOpacity onPress={this.props.navigateButton}>
            <Card containerStyle={styles.cardCategories}>
                <ImageBackground source={require('../assets/pizza2.png')} style={styles.imgCategory} resizeMode="cover">
                  <Text style={styles.textCategory}>Pizzas</Text>
                </ImageBackground>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.navigateButton}>
            <Card containerStyle={styles.cardCategories}>
                <ImageBackground source={require('../assets/sushi.jpg')} style={styles.imgCategory} resizeMode="cover">
                  <Text style={styles.textCategory}>Sushis</Text>
                </ImageBackground>
              </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.navigateButton}>
            <Card containerStyle={styles.cardCategories}>
                <ImageBackground source={require('../assets/gateau.jpg')} style={styles.imgCategory} resizeMode="cover">
                  <Text style={styles.textCategory}>Gâteaux</Text>
                </ImageBackground>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.navigateButton}>
            <Card containerStyle={styles.cardCategories}>
                <ImageBackground source={require('../assets/tacos.jpg')} style={styles.imgCategory} resizeMode="cover">
                  <Text style={styles.textCategory}>Tacos</Text>
                </ImageBackground>
              </Card>
          </TouchableOpacity>
            
          </ScrollView>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
    cardCategories:{
        borderRadius: 10,
        width: 80,
        height: 80,
        borderWidth: 0,
        padding: 0,
        margin: 4,
        marginTop: 10,
      },
      imgCategory: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "column",
        justifyContent: 'flex-end',
        
      },
      textCategory:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        shadowColor: "black",
        paddingLeft: 5,
        paddingBottom: 5
      },
  });

  export default Categories;