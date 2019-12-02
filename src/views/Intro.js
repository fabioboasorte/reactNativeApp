import React, { Component } from "react";
import { View, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";
import { Text } from "react-native-elements";
import { Actions } from 'react-native-router-flux';

import styles from "../../config/styles"

export default class Intro extends Component {
    render() { 

        return (
            <SafeAreaView style={styles.flexContainer}>
                <View
                    style={styles.introTop}>
                    <Image
                        style={styles.introTopIcon}
                        source={require("../../assets/images/icon.png")}
                    />
                </View>

                <View>
                    <Text style={styles.introTitle}>
                        Bem-vindo!
                    </Text>
                    
                    <Text style={styles.introSubTitle}>
                        Usufrua e ajude-nos a construir um
                        App melhor para você Sócio.
                    </Text>
                </View>

                <View>
                    <Image
                        style={styles.introIcon}
                        source={require("../../assets/images/introIcon.png")}
                    />
                </View>

                <View>
                    <TouchableOpacity 
                        style={styles.introButton} 
                        onPress={() => Actions.home() }
                        > 
                        <Image
                            style={styles.introButtonImage}
                            source={require("../../assets/images/introButton.png")}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}