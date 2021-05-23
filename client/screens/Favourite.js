import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import { icons, COLORS, SIZES, FONTS } from '../constants';
import { CitiesData, HostData, HotelData, Fav } from './dummydata';



const Favourite = ({navigation}) => {

    const [restro, setRestro] = React.useState(Fav);

  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.icon} style={{height: 80, width: 80, borderRadius: SIZES.radius/2}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17}}>${item.price}/Night</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.actionBtn}>
            <Button title="Book"  style={{height: 25, width: 25}} color={COLORS.white} ></Button>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.primary, flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>My Trips</Text>
      </View>
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}
            data={restro}
            renderItem={({item}) => <CartCard item={item} />}
            style = {{backgroundColor:'#f0f0f0'}}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        />
    </SafeAreaView>
  );
};


/** StyleSheet */

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Favourite;