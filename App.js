import React, { Component } from "react"
import { AppRegistry, ActivityIndicator } from "react-native"
import Routes from "./App.Routes"

import * as Font from "expo-font"

export default class App extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        isReady: false
    }

    componentWillMount = async() => {
        await Font.loadAsync({
            "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
            "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
            "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
            "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf")
        })
        this.setState({ isReady: true })
    }

    render () {
        if (!this.state.isReady) {
            return <ActivityIndicator />
        }
        
        return <Routes />
    }
}

AppRegistry.registerComponent("App", () => App)
