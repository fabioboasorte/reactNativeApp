import React, { Component } from "react";
import { View, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux';

import BottomBar from "../../src/components/BottomBar"

import styles from "../../config/styles"

export default class Contato extends Component { 
    render() { 
        return (
            <SafeAreaView style={styles.container}>
                
                <View>
                    <Text style={styles.introTitle}>
                        Contato
                    </Text>
                </View>

                <BottomBar />

            </SafeAreaView>
        );
    }
}