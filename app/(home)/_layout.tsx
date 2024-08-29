import { Slot, Stack} from "expo-router";
import { useEffect } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo";
import {StreamChat} from 'stream-chat'


export default function TabLayout(){

    const client = StreamChat.getInstance('2qn8yp5q5yv3')

    useEffect( ()=>{
     const connectUser = async()=>{
        await client.connectUser(
            {
              id: 'jlahey',
              name: 'Jim Lahey',
              image: 'https://i.imgur.com/fR9Jz14.png',
            },
           client.devToken('jlahey'),
          );

        //   const channel = client.channel('messaging', 'First_ChatRoom', {
        //     name :'Chat Room'
        //   })

        //   await channel.watch()
     }
    //  connectUser()
    },[])


    return(
      <OverlayProvider>
        <Chat client={client}>
          <Slot/>
        </Chat>
      </OverlayProvider>
    )
}