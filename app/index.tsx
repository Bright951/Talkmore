import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function MainScreen(){
    return(
        <Redirect href="/(home)/(tabs)"/>
    )
}