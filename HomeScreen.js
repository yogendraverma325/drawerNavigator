import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import {Feather} from '@expo/vector-icons';
import { Icon, Button, Container, Header, Content, Left,Font } from 'native-base'

import CustomHeader from './components/CustomHeader'

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Feather name="home" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/DrawerIcons/home.png')}
        style={styles.icon}
      />
    ),
  })


  render() {
    return (

      <Container>

        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text>Go To Settings Scree bfghfhn</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});