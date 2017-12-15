import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage, View, Text, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated : false,
    };
  }

  componentWillMount = () => { 
    const value = AsyncStorage.getItem('isAuthenticated', (value) => {
        JSON.parse(value) 
    });
    this.setState({
      isAuthenticated: false,
    });
  }

  renderAuthenticated(){
    return(
      <View>
        <Text>
         Utilizador autenticado.
        </Text>
      </View>
    );
  }

  renderAuthenticate(){
    return(
      <View>
        <Text>
         Utilizador nunca autenticado.
        </Text>
      </View>
    );
  }

  render() {
    if (this.state.isAuthenticated) {
      return this.renderAuthenticated();
    }
    return this.renderAuthenticate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
