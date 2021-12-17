import React, { Component } from 'react';
import { View, Share, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

class Footer extends Component {
    onShare = () => {
        result = Share.share({
        message:
          'Deliveroo Clone : https://github.com/Lucasinho11/Deliveroo-React',
      });
    };
  render() {
    return (
      
      <View style={styles.bigVue}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
            <TouchableOpacity onPress={this.props.navigateButton} style={{backgroundColor: '#00c2b3', textAlign: 'center', borderRadius: 10, width: 300}}>
              <View style={styles.button}>
                <Text style={{textAlign: 'center',paddingVertical: 10, color: 'white' }}>Afficher les 3260 restaurants</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, paddingBottom: 10 }}>
            <Button onPress={this.onShare} title="Partager" />
          </View>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
  
  bigVue: {
    marginTop: 18,
  }

  });

  export default Footer;