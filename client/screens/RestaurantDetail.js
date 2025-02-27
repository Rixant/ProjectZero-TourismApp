import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Card,
    FlatList
} from 'react-native';

import GallerySwiper from "react-native-gallery-swiper";

import Gallery from 'react-native-image-gallery';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { red_pin } from '../constants/icons';
import { CitiesData, HostData, HotelData, Comments } from './dummydata';


/** Star Review Function */
const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar


    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.star_full}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }
    //End Full Star


    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.star_half}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }
    //End Half Star


    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.star_empty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }
    //End NoStar


    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
        </View>
    )

}//End Star Review





    

const CartCard = ({item}) => {
    return (
      <View style={styles.commentCard}>
        <View
          style={{
            marginLeft: 10,
            paddingVertical: 0,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.author}</Text>
          <StarReview rate={item.rating} />
          <Text style={{fontSize: 17}}>{item.comment}</Text>
        </View>
        <View style={{borderBottomColor: 'black',
                      borderBottomWidth: 1,
                 marginTop: SIZES.padding*2
  }}
/>
      </View>
    );
  };
  


/** Icon Label for restro facilities */
const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}
//End Icon Label Function


/** Restaurant Detail Function */
const RestaurantDetail = ({ navigation, route }) => {

    const [ comments, setComments] = React.useState([]);

  
    const item = route.params;


    /** Fetch reviews from database using API */
    React.useEffect(() => {
        fetch("http://localhost:3000/reviews/").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setComments(jsonResponse))
    }, [])
     

    // Render

    return (
        
        <View style={styles.container}>
            
            {/* Header */}
            <View style={{ flex: 2 }}>
            
                
                {/* Hotel Bedroom Image Gallery */}
                <Image
                    source={item.item.icon}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />

        {/* <GallerySwiper 
                resizeMode='cover'
                style={{backgroundColor: COLORS.white}}
                        images={[
                                { source: require("../assets/images/hotel1.jpg"),dimensions: { width: 1080, height: 1920 } },
                                { source: require("../assets/images/hotel2.jpg"),dimensions: { width: 1080, height: 1920 } },
                                { source: require("../assets/images/hotel3.jpeg"),dimensions: { width: 1080, height: 1920 } },
                                { source: require("../assets/images/hotel4.jpg"),dimensions: { width: 1080, height: 1920 } },
                                { source: require("../assets/images/hotel5.jpg"),dimensions: { width: 1080, height: 1920 } }
                            ]}/> */}


                <View style={[{
                        position: 'absolute',
                        bottom: "10%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 20,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]} >

                    <View style={{ flexDirection: 'row' }}>


                        <View style={styles.shadow}>
                            <Image source={icons.villa}
                                   resizeMode="cover"
                                   style={{ width: 30,
                                            height: 30,
                                            borderRadius: 15,
                                        }}
                            />
                        </View>
                        
                        {/* Hotel Info */}
                        <View style={{ marginHorizontal: SIZES.radius }}>
                            <Text style={{ ...FONTS.h3, justifyContent: 'center', alignItems:'center' }}>{item.item.name}</Text>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.item.location}</Text>
                            <View style={{flexDirection : 'row' }}>
                                <Image source={icons.user}
                                   resizeMode="cover"
                                   style={{ width: 20,
                                            height: 20,
                                            borderRadius: 15
                                        }}/>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3, paddingRight: SIZES.base }}> 4 Guests</Text>
                                <Image source={icons.bed}
                                   resizeMode="cover"
                                   style={{ width: 20,
                                            height: 20,
                                            borderRadius: 15,
                                        }}/>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3, paddingRight: SIZES.base }}> 3 Bed</Text>
                                <Image source={icons.basket}
                                   resizeMode="cover"
                                   style={{ width: 20,
                                            height: 20,
                                            borderRadius: 15,
                                        }}/>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}> 1 Bath</Text>
                            </View>
                            <StarReview rate={item.item.rating}/>
                        </View>
                        {/* End Hotel Info */}

                    </View>
                </View>

                {/* Header Buttons */}
                <View style={{ position: 'absolute',
                             top: 50,
                             left: 20,
                             right: 20,
                             flexDirection: 'row'}}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>

                            {/* Back Icon */}
                            <Image source={icons.back}
                                    resizeMode="cover"
                                    style={{
                                    width: 30,
                                    height: 30 }} />
                            {/* End Back Icon */}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                            <Image source={icons.menu}
                                   resizeMode="cover"
                                   style={{
                                   width: 30,
                                   height: 30 }}/>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* End Header Buttons */}
                

            </View>
            {/* End Header Section */}


            {/* Body */}
            <ScrollView style={{ flex: 1.5 }}>

                {/* Icons */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
                    <IconLabel
                        icon={icons.villa}
                        label="Villa"
                    />

                    <IconLabel
                        icon={icons.parking}
                        label="Parking"
                    />

                    <IconLabel
                        icon={icons.wind}
                        label="4 °C"
                    />
                </View>
                {/* End Icons */}

                {/* Booking Section  */}
            <View style={{ paddingHorizontal: SIZES.padding, paddingTop: SIZES.padding*2}}>
                <View style={[{ height: 70, width: '100%', borderRadius: 15}]}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                        {/* Price */}
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                                   <Text style={{ ...FONTS.h1 }}>$1000</Text>
                        </View>
                        {/* End Price */}

                        <TouchableOpacity style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }} onPress={() => { console.log("Booking on pressed") }}>

                            {/* Book Button */}
                            <View style={{flex: 1, backgroundColor: "orange", justifyContent: "center", alignItems: "center", borderRadius: 10}}>
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>BOOK</Text>
                            </View>
                            {/*End Book Button */}

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* End Booking View  */}


                {/* About */}
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                        Housed in a building made from handmade brick and carved wood, this upmarket hotel is a 3-minute walk from the freshwater Phewa Lake, 4 km from the Patale Chango waterfall and 8 km from Shanti Stupa, a Buddhist monument.
                        The warmly decorated rooms feature hand-carved wood furnishings, and come with free Wi-Fi and flat-screens, plus tea and coffeemaking facilities. Upgraded rooms add views of the mountains or the lake. Suites add living areas and sleep up to 4 guests.

                        Breakfast and parking are complimentary. Other amenities include an open-air restaurant, a cosy bar and a cafe. There's also a spa, a garden and a terrace.

                        Check-out time: 12:00 PM
                    </Text>
                </View>
                {/* End About Section */}
                
                {/** Reviews Section */}
                <View style={{flex: 1, marginVertical: SIZES.padding2*2}}>
   
                    <Text style={{fontSize: 25, fontWeight: 'bold', paddingHorizontal: SIZES.padding}}>Comments</Text>
   
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 10}}
                        data={comments}
                        renderItem={({item}) => <CartCard item={item} />}
                        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                    />
         
                </View>
                
            </ScrollView>
            {/* End Body Section */}
            
            
        </View>
        //End Main View

        
    );
};//End Restaurant Detail FUnction


/** Style Sheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    commentCard:{
        paddingVertical: 8,
        marginHorizontal: 0,
        marginVertical: 8
    },
    commentsContainer: {
        padding: 8
    },
});

export default RestaurantDetail;