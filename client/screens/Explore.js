import React from 'react';
import {View,
        Text,
        Image,
        TouchableOpacity, 
        StyleSheet,
        TextInput, 
        Animated,
        ScrollView} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';   
import { icons, COLORS, SIZES } from '../constants';


function renderMap(){



    return (
        <View style={{flex:1}}>
            <MapView style={{flex:1}} >

            </MapView>
            <View style={styles.searchBox}>
        <TextInput 
          placeholder="Search Destination . . ."
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex:1,padding:0}}
        />
        <TouchableOpacity>
            <Image source={icons.search} style={{height:20, width:20}} />
        </TouchableOpacity>
        </View>
      
        </View>

        
    )
};





const Explore = () =>{
    return(
        <View style={{flex: 1}}>
            {renderMap()}
        </View>
    )

}

export default Explore;



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
      flexDirection:"row",
      alignSelf:'center',
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.radius
    },scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
    textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },
      card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: 200,
        width: 200,
        overflow: "hidden",
      },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      }
});

