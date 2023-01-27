import React from "react"
import { View,Text, StyleSheet, Image, ScrollView } from "react-native"
import StyledText from "./StyleText"
import Constants  from "expo-constants"
import theme from "../theme"
import { Link, useLocation } from "react-router-native"

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:theme.appBar.primary,
        paddingTop: Constants.statusBarHeight+10,
        paddingBottom:10,
        paddingLeft:10
    },
    text:{
        paddingHorizontal:10,
        color:theme.appBar.secundary
    },
    active:{
        color:theme.appBar.textPrimary,

    }
})

const AppBarTAb=({children,to})=>{
    const {pathname}=useLocation()
    const active=pathname==to
    const textStyles=[
        styles.text,
        active && styles.active
    ]
    return (
    <Link to={to}>
        <StyledText fontWeight="bold" style={textStyles}>
            {children}
        </StyledText>
    </Link>)
}

const AppBar=()=>{
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTAb  to="/">Repositories</AppBarTAb>
                <AppBarTAb  to="/signin">signin</AppBarTAb>
                <AppBarTAb  to="/searchFillter">Search Fillter</AppBarTAb>
                <AppBarTAb  to="/tableRepositories">Table repositories</AppBarTAb>
                <AppBarTAb  to="/viewOneTepositorie">View one repositorie</AppBarTAb>
                <AppBarTAb  to="/deleateRepositorie">Deleate Repositorie</AppBarTAb>
            </ScrollView>
        </View>
    )
}

export default AppBar;