import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo";

export default function ChatScreen(){

    const [ channel, setChannel] = useState()

    if (channel) {
        return(
            <Channel channel={channel}>
                <MessageList/>
                <MessageInput/>
            </Channel>

        )
            }
    return(
        <View>
            <ChannelList onSelect={ setChannel}/>
        </View>
    )
}