import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux';

import styles from "../../config/styles"

export default class BottomBar extends Component { 
    render() { 
        return (
            <View style={styles.bottomBar}>
                
                <TouchableOpacity 
                    style={styles.bottomBarHomeButton} 
                    onPress={() => Actions.home()} 
                    >
                    <Image source={require("../../assets/images/homeButton.png")} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.bottomBarAlertButton} 
                    onPress={() => Actions.alertas()}
                    >
                    <Image source={require("../../assets/images/alertaIcon.png")} />
                </TouchableOpacity>

            </View>
        );
    }
}