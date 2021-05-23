import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import Tabs from './navigation/tabs'
import {Home, RestaurantDetail, Explore, SignIn, SignUp} from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown : false
          }}
          initialRouteName={'Home'}
          >
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
    </NavigationContainer>

  )
}


export default App;