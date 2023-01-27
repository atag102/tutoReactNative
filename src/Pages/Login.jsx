import React from "react";
import { Formik } from "formik";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginPage(){
    const initialValues={
        email:"",
        password:""
    }
    return (<Formik 
        initialValues={initialValues}
        onSubmit={values=>console.log(values)}>
            {({handleChange,handleSubmit,values})=>{
                return (
                <View>
                    <TextInput 
                        placeholder="E-mail" 
                        value={values.email}
                        onChangeText={handleChange("email")}
                    />
                    <TextInput
                        placeholder="password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                    />
                    <Button onPress={handleSubmit} title="Login"/>
                </View>)
            }}
        </Formik>)
}