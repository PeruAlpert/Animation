import { View, Text, Animated, Easing, Touchable, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import AdsHomeList from '../../components/Lists/AdsHomeList';
import MonoText from '../../components/MonoText';
import HackerText from '../../components/animation/HackerText';

const HomeScreen = () => {

    const [images, setImages] = useState([
        'https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBLGZR7m8IYUU235sVVymeGzIMjZjXpwY6fLQ9NjDmjzwYmshMA8Bma4VfxtwItgcukg&usqp=CAU',
        'https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBLGZR7m8IYUU235sVVymeGzIMjZjXpwY6fLQ9NjDmjzwYmshMA8Bma4VfxtwItgcukg&usqp=CAU',
      ]);
      const handleLinkPress = () => {
        Linking.openURL('https://perualpert.github.io/')
      };
  return (
    <View style={styles.container}>
      <View style={styles.adsContainer}>
      <AdsHomeList images={images} /> 
      <HackerText text="Hello i'm peru alpert"  bold size={17}/>
      <TouchableOpacity onPress={handleLinkPress}>
      <HackerText  color={'blue'} text="this is my website" />
      </TouchableOpacity>
     
      </View>
     
    </View>
  )
}

export default HomeScreen