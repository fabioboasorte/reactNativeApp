import React, { Component } from "react";
import { View } from "react-native";
import styles from "./_Styles"

export default class Separator extends Component { 
    render() { 
        return (
            <View style={styles.separator} />
        );
    }
}