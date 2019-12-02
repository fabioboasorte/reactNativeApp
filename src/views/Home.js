import React, { Component } from "react";
import { View, TouchableOpacity, Alert, Image, ImageBackground } from "react-native";
import { Text, Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import BottomBar from "../../src/components/BottomBar"

import styles from "../../config/styles"

export default class Home extends Component { 
    render() { 
        return (
            <ImageBackground 
                source={require("../../assets/images/pageBg.png")}
                style={styles.flexContainerNoGutter}>
                    
                <View>
                    <Image
                        style={styles.homeSindLogoIcon}
                        source={require("../../assets/images/homeLogoIcon.png")}
                    />
                </View>

                <View style={styles.homeMenu}>

                    <TouchableOpacity 
                        style={styles.homeMenuButtons} 
                        onPress={() => Actions.noticias() }
                        > 
                        <Text style={styles.homeMenuButtonsText}>
                            Notícias
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.homeMenuButtons} 
                        onPress={() => Actions.contato() }
                        > 
                        <Text style={styles.homeMenuButtonsText}>
                            Contato
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.homeMenuButtonsLast} 
                        onPress={() => Actions.alertas() }
                        > 
                        <Text style={styles.homeMenuButtonsText}>
                            Alertas
                        </Text>
                    </TouchableOpacity>

                </View>

                <BottomBar />

            </ImageBackground>
        );
    }
}