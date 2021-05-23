import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"
import { Home, Explore, RestaurantDetail, SignIn, SignUp, Favourite}  from "../screens"
import { COLORS, icons } from '../constants'


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
       
        <Tab.Navigator 
            tabBarOptions={{
                       showLabel: false,
                       style: {
                                backgroundColor: COLORS.primary,
                                paddingBottom: 15,
                                
                                }}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'white' : COLORS.secondary
                            }}
                        />
                    )
                }} 
            />

            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.explore}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? 'white' : COLORS.secondary
                            }}
                        />
                    )
                }} 
            />

            <Tab.Screen
                name="Trips"
                component={Favourite}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.trips}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? 'white' : COLORS.secondary
                            }}
                        />
                    )
                }} 
            />


            <Tab.Screen
                name="Chat"
                component={SignUp}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.inbox}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? 'white' : COLORS.secondary
                            }}
                        />
                    )
                }} 
            />


            
            <Tab.Screen
                name="Account"
                component={SignIn}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'white' : COLORS.secondary
                            }}
                        />
                    )
                }} 
            />
        </Tab.Navigator>
        
    )
}


export default Tabs;