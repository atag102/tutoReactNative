import React, { Children } from "react"
import { View,Text, StyleSheet } from "react-native"
import theme from "../theme"

const styles =StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily:theme.fonts.main,
        fontWeight:theme.fontWeights.normal
    },
    colorPrimary:{
        color:theme.colors.primary
    },
    colorSecondary:{
        color:theme.colors.textSecondary
    },
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    subheadig:{
        fontSize:theme.fontSizes.subheading
    },
    small:{
        fontSize:10
    },
    TextAlignCenter:{
        textAlign:"center"
    }
})

export default function StyledText({align,children,color,fontSize,fontWeight,style}){
    const textStyles=[
        styles.text,

        color == "primary" && styles.colorPrimary,
        color == "secondary" && styles.colorSecondary,
        fontSize == "subhead" && styles.subheadig,
        fontWeight=="bold" && styles.bold,
        align =="center" && styles.TextAlignCenter,
        style
        
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}