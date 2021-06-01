import {icons, images} from '../constants';


export const CitiesData = [
    {
        id: 1,
        name: "Pokhara",
        icon: images.pokhara
    },
    {
        id: 2,
        name: "Kathmandu",
        icon: images.kathmandu,
    },
    {
        id: 3,
        name: "Dharan",
        icon: images.dharan,
    },
    {
        id: 4,
        name: "Butwal",
        icon: images.butwal,
    },
    {
        id: 5,
        name: "Biratnagar",
        icon: images.biratnagar,
    }

]


export const HostData = [
    {
        id: 1,
        name: "Royal Mustang Palace",
        icon: images.hs5,
        location: "Butwal",
        rating : "5.0",
        price: "50"
    },
    {
        id: 2,
        name: "Annapurna Lodge",
        icon: images.hs2,
        location: "Dharan",
        rating : "4.5",
        price: "90"
    },
    {
        id: 3,
        name: "Gurung Cottage",
        icon: images.hs3,
        location: "Bhaktapur",
        rating : "4.0",
        price: "103"
    },
    {
        id: 4,
        name: "Hotel Marpha Palace",
        icon: images.hs4,
        location: "Mustang",
        rating : "3.5",
        price: "40"
    },
    {
        id: 5,
        name: " Thakali Homestay ",
        icon: images.hs1,
        location: "Pokhara",
        rating : "5.0",
        price: "300"
    }

]


export const HotelData = [
    {
        id: 1,
        name: " Lakeside Lodge",
        location: "Lakhan Chowk",
        rating : "4.5",
        icon: images.hotel1,
        distance: "2.6 miles",
        price: "40"
    },
    {
        id: 2,
        name: " Machhapuchre Inn",
        location: "Lakhan Chowk",
        rating : "4.0",
        icon: images.hotel2,
        distance: "6.9 miles",
        price: "79"
    },
    {
        id: 3,
        name: "Pokhara Traditional Stay",
        location: "Lakhan Chowk",
        rating : "5.0",
        icon: images.hotel3,
        distance: "13 miles",
        price: "103"
    },
    {
        id: 4,
        name: "Peace Stupa Palace",
        location: "Lakhan Chowk",
        rating : "4.5",
        icon: images.hotel4,
        distance: "2.9 miles",
        price: "57"
    },
    {
        id: 5,
        name: " Sherpa's Home ",
        location: "Lakhan Chowk",
        rating : "5.0",
        icon: images.hotel5,
        distance: "7.6 miles",
        price: "38"
    }

]



export const Fav = [
   
    {
        id: 3,
        name: "Pokhara Traditional Stay",
        location: "Lakhan Chowk",
        rating : "5.0",
        icon: images.hotel3,
        distance: "13 miles",
        price: 103
    },
    {
        id: 4,
        name: "Peace Stupa Palace",
        location: "Lakhan Chowk",
        rating : "4.5",
        icon: images.hotel4,
        distance: "2.9 miles",
        price: 57
    }

]



export const Comments = [
    {
        id: 1,
        name: "John",
        rating : "5.0",
        comments: "The house is super close to the beach, clean and just the right size. The owner was very helpful with tips about the area and a very easy check in process. Would definitely recommend and be happy to stay again!"
    },
    {
        id: 2,
        name: "Peter",
        rating : "4.5",
        comments: "We stayed here for a week, and the house was exactly as advertised. We had plenty of space, and everything was clean and comfortable. It's a super short walk to the beach, and we enjoyed walking to restaurants and coffee shops (and thank you Sal for the recommendations!). The owner, Sal, was fantastic to work with in every way. We will 110% be back as this was our best beach vacation to date :)"
    },
    {
        id: 3,
        name: "Sally",
        rating : "4.0",
        comments: "We absolutely loved our stay in the coach house. The location was perfect at the end of the island. The beach was just a short walk away. There were many great restaurants with live music every day. Lisa got back to us very quickly if we had any questions. I highly recommend this property!"
    },
    {
        id: 4,
        name: "Amber",
        rating : "4.5",
        comments: "Not only is this property probably the best deal in Holgate, it may well be the best deal on the Island for a couple. Well apportioned, clean, close to the beach, and the owner was excellent to communicate with. Highly recommend."
    },


]



export const dummy_data = {CitiesData, HostData, HotelData, Fav, Comments}


