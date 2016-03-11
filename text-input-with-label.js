'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class TextInputWithLabel extends Component {
  constructor(props={}) {
    console.log("Here are the props", props);
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>
          { this.props.labelText }
        </Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.props.inputText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    textAlign: 'left',
    margin: 10,
  },
  input: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('TextInputWithLabel', () => TextInputWithLabel);
