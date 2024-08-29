import {Slot, Stack, Tabs} from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OverlayProvider } from "stream-chat-expo";

export default function TabLayout(){
    return(
        <GestureHandlerRootView>
                <Slot/>
        </GestureHandlerRootView>
    )
}