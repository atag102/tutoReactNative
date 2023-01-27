import React from "react"
import { View,Text, StyleSheet, Image } from "react-native"
import theme from "../theme"
import StyledText from "./StyleText"

const RepositaoriStats=(item)=>{
    return (
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <View>
                <StyledText fontWeight="bold" align="center">Stars</StyledText>
                <StyledText align="center">{item.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Forks</StyledText>
                <StyledText align="center">{item.forkCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Review</StyledText>
                <StyledText align="center">{item.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold" align="center">Rating</StyledText>
                <StyledText align="center">{item.ratingAverage}</StyledText>
            </View>
        </View>
    )
}



const RpositoryIteamHeader=(item)=>{
    return(
    <View style={{flexDirection:"row",paddingBottom:2}}>
        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}/>
        <View style={{paddingLeft:10}}>
            <StyledText  fontSize="subheading" fontWeight="bold" >{item.fullname}</StyledText>
            <StyledText  >{item.description}</StyledText>
            <StyledText style={styles.language} >{item.language}</StyledText>
        </View>
    </View>)
}


const ItemRepositoris=({item})=>{
    return(
        <View key={item.id} style={styles.container}>
            <RpositoryIteamHeader {...item}/>
            <RepositaoriStats {...item} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:20, 
        paddingBottom:5,
        paddingTop:5
    },
    language:{
        padding:4,
        color:theme.colors.white,
        backgroundColor:theme.colors.primary,
        alignSelf:"flex-start",
        borderRadius:4,
        overflow:"hidden"
    },
    image:{
        width:48,
        height:48,
        borderRadius:4
    }
})

export default ItemRepositoris;