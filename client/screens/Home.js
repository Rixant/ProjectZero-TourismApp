//import all required libraries
import React from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList, 
    Touchable,
    TextInput} from 'react-native';
import {Explore, RestaurantDetail} from '../screens';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import { CitiesData, HostData, HotelData } from './dummydata';

     


/** MAIN FUNCTION */
const Home = () => {

    //hooks for state management
    const [cities, setCities] = React.useState(CitiesData)
    const [hosts, setHosts] = React.useState(HostData)
    const [hotels, setHotels] = React.useState(HotelData)
    const [hotel, setHotel] = React.useState(null)



    /** TOP SEARCH SECTION */
    function renderHeader(){

        return(

            <View style={{ flexDirection: 'row', height: 50}}>

                {/* location */}
                <TouchableOpacity style={{  width: 50,
                                            paddingLeft: SIZES.padding * 2,
                                            justifyContent: 'center' }}
                                onPress={()=> navigation.navigate("Explore")}
                                >
                    <Image source={icons.nearby}
                        resizeMode="contain"
                        style={{
                        width: 40,
                        height: 40,
                        tintColor: "white"}}
                        />
                </TouchableOpacity>
                {/*end location */}

                {/* Search field */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{width: '80%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                paddingHorizontal: 15,
                                borderRadius: SIZES.radius,flexDirection:'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                                
                            }}
                            >
                        <TextInput placeholder = "Search Destination . . ."
                                    placeholderTextColor = "#000"
                                    autoCapitalize = "none"  
                                    style={{ ...FONTS.body3, flex:1,padding:0 }}>
                                        </TextInput>
                                        <TouchableOpacity >
            <Image source={icons.search} style={{height:20, width:20}} />
        </TouchableOpacity>

                                        
                    </View>
                    
                </View>
                {/*End Search field */}

                {/* FAVOURITES */}
                <TouchableOpacity style={{width: 50,
                                        paddingLeft: SIZES.padding/2,
                                        justifyContent: 'center'}}
                                        >
                    <Image source={icons.like}
                            resizeMode="contain"
                            style={{
                            width: 30,
                            height: 30,
                            tintColor: "white"}}
                            />
                </TouchableOpacity>
                {/* End favourites */}

            </View>
        )
    }//end top bar


    /** TRENDING CITIES SECTION */
    function renderMainCities(){
        

        const renderItem = ({ item }) => {

            return (

                <View >
                    <TouchableOpacity style={{padding: SIZES.padding/4,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: SIZES.padding*2,
                                            ...styles.shadow,
                                             }} >
                        <View style={{width: 75,
                                    height: 75,
                                    borderRadius: 300,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: COLORS.white,}}
                                    >
                            {/* Cities Image */}
                            <Image source={item.icon}
                                    resizeMode="contain"
                                    style={{width: 75,
                                            height: 75,
                                            borderRadius: 300,
                                            paddingLeft: SIZES.padding*4 }}
                                        />
                        </View>
                        {/*End Cities Image */}

                        {/* Cities Name */}
                        <Text style={{color: COLORS.black,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    ...FONTS.h5 }}
                                    >
                            {item.name}
                        </Text>
                        {/* End Cities Name */}

                    </TouchableOpacity>
                </View>
                
            )
        }

        //return flatlist for main cities
        return(
            
            <View style={{ padding: SIZES.padding * 2, backgroundColor: '#f0f0f0' }}>
                <Text style={{ ...FONTS.h1 }}>Trending Cities</Text>
                    <FlatList data={cities}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingVertical: SIZES.padding }}
                            />
            </View>
        
        )//end Maincities return
        
    }
    //end Main CIties



    /** BackDrop Function */
    function BackDrop(){

        return(
            <View style={{height: 200,
                        width: '100%',
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center' }}
                        >

                {/* BackDrop Image */}
                <Image source={images.visitnepal2020}
                    resizeMode="contain"
                    style={{width: '100%',
                            height: '100%' }}/>
                {/* BackDrop Image */}

            </View>

        )

    }//end Backdrop function



    /** Nearby Restro function */
    function renderNearby(){

        const renderItem = ({ item }) => {

            return (

                <View>

                    {/* Cities Square Section */}
                    <TouchableOpacity style={{ padding: SIZES.padding,
                                            // paddingBottom: SIZES.padding,
                                                borderRadius: 10,
                                                paddingHorizontal: SIZES.padding,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginRight: SIZES.padding*2,
                                                ...styles.shadow }}
                                            >
                        
                        {/* Round shape */}
                        <View style={{width: 180,
                                    height: 120,
                                    borderRadius: 10,
                                    alignItems: "center",
                                    justifyContent: "center"}}
                                    >
                            
                            {/* Cities image */}
                            <Image  source={item.icon}
                                    resizeMode="contain"
                                    style={{width: 180,
                                            height: 120,
                                            borderRadius: 10,
                                            paddingLeft: SIZES.padding*4 }}
                                        />
                                        
                        </View>
                        {/* End Round shape */}


                        <Text style={{color: COLORS.black,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: SIZES.padding,
                                    ...FONTS.body3 }}
                                    >
                                {item.name}
                        </Text>

                    </TouchableOpacity>
                    {/* End Cities Square Section */}


                </View>
                    
            )
        }

        
        return(
            
            <View style={{ padding: SIZES.padding * 2, backgroundColor: '#f0f0f0' }}>
                <Text style={{ ...FONTS.h1 }}>Nearby</Text>

                    {/* Displaying Cities in list */}
                    <FlatList data={hotels}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingVertical: SIZES.padding }}
                            />
                    {/*End Displaying Cities in list */}
            </View>

            
        )
    }
    /** End Nearby Restro function */



    /** Recommended Section  */
    function renderRecommended(navigation) {

        const renderItem = ({ item }) => (

            <TouchableOpacity  style={{ padding: SIZES.padding*2, marginBottom: SIZES.padding * 2, borderRadius: 20}}>

                {/* Restaurant Image */}
                <View style={{ marginBottom: SIZES.padding }}>
                    <Image source={item.icon}
                            
                            resizeMode="cover"
                            style={{width: "100%",
                                    height: 180,
                                    borderRadius: 20
                            
                                 }}
                        />
        

                    <View style={{position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow}}

                            
                                >
                        <Text style={{ ...FONTS.h5 }}> {item.distance}</Text>
                    </View>
                </View>
                {/*End  Restaurant Image */}

        
                    
                {/* Restaurant Info */}
                {/* <Text style={{ ...FONTS.body2 }}></Text> */}
        
                <View style={{marginTop: SIZES.padding, flexDirection: 'row'}} >
                    
                <Image source={icons.star} style={{height:20, width: 20 }} />
                    <Text style={{ ...FONTS.body3, marginRight: SIZES.padding2}}> {item.rating} </Text>
                    <Text style={{ ...FONTS.body3}}> {item.name}</Text>

        
                    {/* Categories */}
                    {/* <View style={{flexDirection: 'row', marginLeft: 10 }} >    </View> */}
                </View>
                 {/*End Restaurant Info */}

            </TouchableOpacity>
        )
    

    return (

        <View style={{ padding: SIZES.padding * 2, backgroundColor: '#f0f0f0'}}>
            <Text style={{ ...FONTS.h1, paddingHorizontal: SIZES.padding }}>Recommended</Text>

                {/* Displaying Restaurant List */}
                <FlatList data={hotels}
                          keyExtractor={item => `${item.id}`}
                          renderItem={renderItem}
                        
                          
                          contentContainerStyle={{
                          paddingHorizontal: SIZES.padding ,
                          paddingBottom: 30 ,
                          marginTop: SIZES.padding2*2}}
                        
                        />

                {/* End Displaying Restaurant List */}
               
        </View>

        )

    }
    // End Recommended function


    
    /** Main return */
    return (
        <View >
            <SafeAreaView style={{backgroundColor : COLORS.primary, height: 120}}>
                {renderHeader()}
            </SafeAreaView>
            {renderMainCities()}
            {BackDrop()}
            {renderNearby()}
            {renderRecommended()}
         </View>

    )//end main return

}//end main function


export default Home;


/** StyleSheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
     },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
            },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})