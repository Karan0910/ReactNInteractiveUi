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

  state = {
    fadeIn: new Animated.Value(0),
    fadeOut : new Animated.Value(1)
  };

  _startIn = () => {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 1000
    }).start();
  };


  _startOut = () => {
    Animated.timing(this.state.fadeOut, {
      toValue: 0,
      duration: 1000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.borderStyle}>
          <TextInput style={styles.welcome} onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChangeText={(text) => { this.emailIsValid(text)}}></TextInput>
          <Animated.View style={{ opacity :this.state.fadeIn,height:25,width:25, position : 'absolute' , right : 10, top : 8 }}>
              <Image source={require('./src/images/arrow.png')}></Image>
          </Animated.View>  
          </View>

      </View>
    );
  }

   emailIsValid = (email) =>  {
    
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
      console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      this._startIn();
      this.setState({
        fadeIn : new Animated.Value(1)
        });
    }
    else {
      console.log("hi");
      
      this._startOut();
      this.setState({
        fadeIn : new Animated.Value(0)
        });
    }
    /*return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)*/
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