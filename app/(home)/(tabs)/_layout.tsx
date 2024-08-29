import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Stack, Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="chat"
                options={{
                    title:'Chats',
                    tabBarIcon:({focused , color, size})=>{
                        return(
                            <TabBarIcon name={focused ? 'chatbox' : 'chatbox-outline'} color={color} size={size}/>
                        )
                    },
                    headerShown:false,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title:'Home',
                    tabBarIcon:({focused , color, size})=>{
                        return(
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
                        )
                    },
                    headerShown:false
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title:'Profile',
                    tabBarIcon:({focused , color, size})=>{
                        return(
                            <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={size} />
                        )
                    },
                    headerShown:false
                }}
            />
        </Tabs>
    )
}