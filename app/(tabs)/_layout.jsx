import { Text, View, Image} from 'react-native'
import React from 'react'
import { Tabs, Riderect } from 'expo-router'

import { icons } from '../../constants'


const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View>
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            style= {{
                width: 24,
                height: 24,
            }}
            />
        </View>
    )
}

const TabLayout =  () => {
    return (
        <>
        <Tabs>
            <Tabs.Screen
              name="home"
              options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                     icon={icons.home}
                     color={color}
                     name="Home"
                     focused={focused}
                    />
                )
              }}
            />

<Tabs.Screen
              name="New"
              options={{
                title:'New',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                     icon={icons.New}
                     color={color}
                     name="New"
                     focused={focused}
                    />
                )
              }}
            />
      



            <Tabs.Screen
              name="create"
              options={{
                title:'Create',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                     icon={icons.create}
                     color={color}
                     name="Create"
                     focused={focused}
                    />
                )
              }}
            />



            <Tabs.Screen
              name="profile"
              options={{
                title:'Profile',
                headerShown:false,
                tabBarIcon:({color, focused})=>(
                    <TabIcon
                     icon={icons.profile}
                     color={color}
                     name="Profile"
                     focused={focused}
                    />
                )
              }}
            />
            
        </Tabs>
        </>

        
    )
}



export default TabLayout




//const TabsLayout = () => {
// return (
//    <View>
  //    <Image
    //    source={}
      ///>
    //</View>
  //)
//}