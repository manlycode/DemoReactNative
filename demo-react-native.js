/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

import TextInputWithLabel from './text-input-with-label';

export default class DemoReactNative extends Component {

  constructor(props={}) {
    super(props)

    console.log("Hey, this got called");

    this.state = {
      text: "something"
    }
  }

  myTextChanged(someText) {
    console.log(this, someText);
  }

  onPressButton() {
    console.log("got pressed");
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInputWithLabel
          labelText={"First Name"}
          inputText={"Prephilled"} />

        <TextInputWithLabel
          labelText={"Last Name"}
          inputText={"Smith"} />

        <TouchableHighlight onPress={this.onPressButton.bind(this)}>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                 style={{width: 100, height: 100}} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  custom: {
    textAlign: 'center',
    color: '#ffaabb',
    marginBottom: 5,
  },
});
