import React from 'react';
import { Font } from 'expo';
import {
  Text,
  View,
} from 'react-native';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };


// some comments

  async componentDidMount() {
    await Font.loadAsync({
      'mega-font': require('./assets/MajorMonoDisplay-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'mega-font', fontSize: 56 }}>
        Hello, world!
        </Text>
        </View>
      );
    }
    else {
      return (<Text>Waiting for font</Text>)
    }
  }
}
