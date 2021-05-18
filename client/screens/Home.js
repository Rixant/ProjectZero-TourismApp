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
    Touchable} from 'react-native';
import {Explore} from '../screens';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import { CitiesData, HostData, HotelData } from './dummydata';
     


/** MAIN FUNCTION */
const Home = () => {

    //hooks for state management
    const [cities, setCities] = React.useState(CitiesData)
    const [hosts, setHosts] = React.useState(HostData)
    const [hotels, setHotels] = React.useState(HotelData)


    /** TOP SEARCH SECTION */
    function renderHeader(){

        return(

            <View style={{ flexDirection: 'row', height: 50 }}>

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
                        height: 40}}
                        />
                </TouchableOpacity>
                {/*end location */}

                {/* Search field */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{width: '80%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius}}
                            >
                        <Text  style={{ ...FONTS.h3 }}> Search Places  </Text>
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
                            height: 30}}
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

                <View>
                    <TouchableOpacity style={{padding: SIZES.padding/4,
                                            // paddingBottom: SIZES.padding,
                                            backgroundColor:  'orange',
                                            borderRadius: 100,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: SIZES.padding*2,
                                            ...styles.shadow }}
                    
                                        >
                        <View style={{width: 75,
                                    height: 75,
                                    borderRadius: 300,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: COLORS.white,}}
                                    >
                            <Image source={item.icon}
                                    resizeMode="contain"
                                    style={{width: 75,
                                            height: 75,
                                            borderRadius: 300,
                                            paddingLeft: SIZES.padding*4 }}
                                        />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding: SIZES.padding/4,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: SIZES.padding*2,
                                            ...styles.shadow }}
                                            >
                        <Text style={{color: COLORS.black,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    ...FONTS.h5 }}
                                    >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            )
        }

        
        return(
            
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Trending Cities</Text>
                    <FlatList data={cities}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingVertical: SIZES.padding }}
                            />
            </View>
        
        )
        
    }



    function BackDrop(){

        return(
            <View style={{height: 200,
                        width: '100%',
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center' }}
                        >

                <Image source={images.visitnepal2020}
                    resizeMode="contain"
                    style={{width: '100%',
                            height: '100%' }}
                />

            </View>

        )

    }



    function renderNearby(){

        const renderItem = ({ item }) => {

            return (

                <View>

                    {/* Cities Square Section */}
                    <TouchableOpacity style={{ padding: SIZES.padding/4,
                                            // paddingBottom: SIZES.padding,
                                                backgroundColor:  COLORS.white,
                                                borderRadius: 25,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginRight: SIZES.padding*2,
                                                ...styles.shadow }}
                                            >
                        
                        {/* Round shape */}
                        <View style={{width: 180,
                                    height: 180,
                                    borderRadius: 25,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: COLORS.white }}
                                    >
                            
                            {/* Cities image */}
                            <Image  source={item.icon}
                                    resizeMode="contain"
                                    style={{width: 180,
                                            height: 180,
                                            borderRadius: 25,
                                            paddingLeft: SIZES.padding*4 }}
                                        />
                        </View>
                        {/* End Round shape */}

                    </TouchableOpacity>
                    {/* End Cities Square Section */}

                    {/* Cities Name Section */}
                    <TouchableOpacity style={{padding: SIZES.padding/4,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: SIZES.padding*2,
                                            ...styles.shadow}}
                                            >
                        {/* Cities Name */}
                        <Text style={{color: COLORS.black,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: SIZES.padding,
                                    ...FONTS.body3 }}
                                    >
                                {item.name}
                        </Text>
                        {/* End Cities Name */}

                    </TouchableOpacity>
                    {/* End Cities Name Section */}

                </View>
                    
            )
        }

        
        return(
            
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Nearby</Text>

                    {/* Displaying Cities in list */}
                    <FlatList data={hosts}
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


    /** Recommended Section  */
    function renderRecommended() {

        const renderItem = ({ item }) => (

            <TouchableOpacity style={{ marginBottom: SIZES.padding * 2 }}>

                {/* Restaurant Image */}
                <View style={{ marginBottom: SIZES.padding }}>
                    <Image source={item.icon}
                            resizeMode="cover"
                            style={{width: "100%",
                                    height: 200,
                                    borderRadius: SIZES.radius }}
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
                        <Text style={{ ...FONTS.h4 }}> {item.distance}</Text>
                    </View>
                </View>
                {/*End  Restaurant Image */}

        
                    
                {/* Restaurant Info */}
                {/* <Text style={{ ...FONTS.body2 }}></Text> */}
        
                <View style={{marginTop: SIZES.padding, flexDirection: 'row'}} >
                        
                    {/* Rating */}
                    <Image source={icons.star}
                            style={{height: 20,
                                    width: 20,
                                    tintColor: COLORS.primary,
                                    marginRight: 10 }}
                                />
                    <Text style={{ ...FONTS.body3 }}> {item.name}</Text>
        
                    {/* Categories */}
                    {/* <View style={{flexDirection: 'row', marginLeft: 10 }} >    </View> */}
                </View>
                 {/*End Restaurant Info */}

            </TouchableOpacity>
        )
    

    return (

        <View style={{ padding: SIZES.padding * 2}}>
            <Text style={{ ...FONTS.h1 }}>Recommended</Text>

                {/* Displaying Restaurant List */}
                <FlatList data={hotels}
                          keyExtractor={item => `${item.id}`}
                          renderItem={renderItem}
                          contentContainerStyle={{
                          paddingHorizontal: SIZES.padding * 2,
                          paddingBottom: 30 }}
                        />
                {/* End Displaying Restaurant List */}
        </View>

        )

    }


    /** Main return */
    return (
        <ScrollView>
            <SafeAreaView>
                {renderHeader()}
            </SafeAreaView>
            {renderMainCities()}
            {BackDrop()}
            {renderNearby()}
            {renderRecommended()}
         </ScrollView>

    )//end main return

}//end main function




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




export default Home;