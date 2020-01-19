import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'
import {Feather} from '@expo/vector-icons';
class CustomHeader extends Component {

    async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
      }
    
    render() {
        return (
          
            <Header>
                <Text onPress={() => this.props.drawerOpen()} >Open</Text>
                
            </Header>
        );
    }
}
export default CustomHeader;