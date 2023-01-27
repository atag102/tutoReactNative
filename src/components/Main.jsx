import React from "react";
import { Switch, Text,View } from "react-native";
import ReposList from "./RepositorList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import LoginPage from "../Pages/Login";

const Main=()=>{
    return (
        <View style={{flex:1}}>
            <AppBar/>
                <Routes>
                    <Route exact path="/" element={<ReposList/>}/>
                    <Route exact path="/signin" element={<LoginPage/>}/>
                </Routes>
        </View>
    )
}

export default Main;
