import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,LayoutAnimation,Animated,Image, TouchableOpacity} from 'react-native';

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
    this.state={emailValid:false, rightPosition:-100, inputPassShadow : 0.09,inputTextShadow:0.09,showArrow: false};
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

  _onFocusEmail = (e) => {
    //console.log(e)
    this.setState({inputTextShadow:0.90,inputPassShadow:0.09})
  };
  _onFocusPass = (e) => {
    //console.log(e)
    this.setState({inputPassShadow:0.90,inputTextShadow:0.09})
  };

    _renderArrow = () => {
          if (this.state.showArrow) {
            return (
              <Image style={{height:25,
                width:25,
                position : 'absolute' ,
                right : this.state.rightPosition, 
                top : 8,
                alignSelf:"flex-end" }} source={require('./src/images/arrow.png')}></Image>
            );
        } else {
            return null;
        }
    };


  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#003F5C',
        padding:10
      },
      welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        color:'#FFF',
        alignSelf:'stretch',
      },

      textBorderStyle: {
        backgroundColor: '#465881',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: this.state.inputTextShadow,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
      },
      passBorderStyle: {
        backgroundColor: '#465881',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOpacity: this.state.inputPassShadow,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        marginTop: 20
      },
      SubmitButtonStyle: {
 
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginTop:30,
        marginRight:30,
        backgroundColor:'#FB5B5A',
        borderRadius:50,
      },
     
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      }
     
     
    });
    
    return (
      <View style={styles.container}>

        <View style={styles.textBorderStyle}>
          <TextInput style={styles.welcome} onBlur={this._onBlur}
          onFocus={this._onFocusEmail}
          onChangeText={(text) => { this.emailIsValid(text)}}></TextInput>
          {this._renderArrow()} 
        </View>
        <View style={styles.passBorderStyle}>
          <TextInput style={styles.welcome} onBlur={this._onBlur}
          onFocus={this._onFocusPass}
          textContentType="password"
          onChangeText={(text) => { this.emailIsValid(text)}}></TextInput>
        </View>

        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> SUBMIT </Text>
            
      </TouchableOpacity>
      

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
      this.setState({showArrow:true})
      this.setState({rightPosition:-100})
      
    }
    /*return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)*/
  }

  

}

