import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Alert,Animated,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constuctor(props)
  {
    //super(props);
    this.state={emailValid:false};
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.borderStyle}>
          <TextInput style={styles.welcome} onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChangeText={(text) => { this.emailIsValid(text)}}></TextInput>
          <Image style={{ height:25,width:25, position : 'absolute' , right : 10, top : 8 }}source={require('./src/images/arrow.png')}></Image>
        </View>

      </View>
    );
  }

   emailIsValid = (email) =>  {
    console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    /*return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)*/
  }

  startAnimation = () => {

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6e40a2',
    padding:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color:'#FFF',
    alignSelf:'stretch',
  },
  borderStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    backgroundColor: '#000'
  },
});