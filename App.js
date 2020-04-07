import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,LayoutAnimation,Animated,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constuctor(props)
  {
    //super(props);
    this.state={emailValid:false, rightPosition:100, inputShadow : 0.1};
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

  _onFocus = () => {
    this.setState({inputShadow:0.90})
      
  };

  render() {

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
        backgroundColor: '#000',
        elevation: 100,
        shadowColor: 'black',
        shadowOpacity: this.state.inputShadow,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
      },
      arrowStyle: { 
        height:25,
        width:25,
        position : 'absolute' ,
        right : this.state.rightPosition, 
        top : 8 }
    });
    return (
      <View style={styles.container}>

        <View style={styles.borderStyle}>
          <TextInput style={styles.welcome} onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChangeText={(text) => { this.emailIsValid(text)}}></TextInput>
          <Image style={styles.arrowStyle} source={require('./src/images/arrow.png')}></Image>
           
          </View>

      </View>
    );
  }

   emailIsValid = (email) =>  {
    
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {
      console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      LayoutAnimation.spring();
      this.setState({rightPosition:10})
    }
    else {
      console.log("hi");
      LayoutAnimation.spring();
      
      this.setState({rightPosition:-100})
      
    }
    /*return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)*/
  }

  

}

