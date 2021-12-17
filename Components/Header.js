import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';

class Header extends Component {
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };
  render() {
    const { search } = this.state;
    return (
      <View>
        <View style={styles.header}>
            <View style={styles.headerLeft}>
              <LottieView source={require('../assets/scooter.json')} autoPlay loop style={styles.lottieCycle} />
              <Text style={{color: 'white'}}>  Lieu sélectionné </Text>
              <Image style={styles.menuArrow} source={require('../assets/arrow-down.png')}/>
            </View>
            <View style={styles.regLoop}>
              <Image style={styles.menuImg} source={require('../assets/userProfile.png')}/>
              <Text lightTheme onChangeText={this.updateSearch} value={search} style={styles.loopStyle}>
                🔍
              </Text>
            </View>
            
        </View>  
        
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#00c2b3',
        paddingTop: 50,
        marginBottom: -55
      },
      regLoop: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 32,
      },
      headerLeft:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        paddingBottom: 30
      },
      loopStyle: {
        marginLeft: 10,
      },
      menuImg:{
        width:30,
        height: 30
      },
      menuArrow:{
        width:10,
        height: 10
      },
      lottieCycle:{
        width: 70,
        backgroundColor: 'transparent'
      }
  });

  export default Header;