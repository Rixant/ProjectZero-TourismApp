import React from 'react';
import {View,
        Text,
    Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';   


function renderMap(){
    return (
        <View style={{flex:1}}>
            <MapView
                style={{flex:1}}
                >
            </MapView>

        </View>
    )
}


const Explore = () =>{
    return(
        <View style={{flex: 1}}>
            {renderMap()}
        </View>
    )

}

export default Explore;


