import React from "react"
import {Router, Scene, Stack} from "react-native-router-flux"

import Intro from "./src/views/Intro"
import Home from "./src/views/Home"
import Noticias from "./src/views/Noticias"
import Contato from "./src/views/Contato"
import Alertas from "./src/views/Alertas"

const Routes = () => (
    <Router sceneStyle={{ backgroundColor: "#FFFFFF" }}>
        <Stack hideNavBar="hideNavBar" key="root">
            <Scene key="intro" component={Intro} title="Intro" initial={true}/>

            <Scene key="home" component={Home} title="Home"/>

            <Scene key="noticias" component={Noticias} title="Noticias"/>
            
            <Scene key="contato" component={Contato} title="Contato"/>

            <Scene key="alertas" component={Alertas} title="Alertas"/>
        </Stack>
    </Router>
);

export default Routes