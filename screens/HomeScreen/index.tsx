import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import HackerText from '../../components/animation/HackerText';
import FlagsList from '../../components/Lists/FlagsList';
import MonoText from '../../components/MonoText';
import {colors} from '../../constants/Colors';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const countries = [
    {
      name: 'United kingdom',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197374.png',
    },
    {
      name: 'United states',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197484.png',
    },
    {
      name: 'France',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197560.png',
    },
    {
      name: 'Germany',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197571.png',
    },
    {
      name: 'Spain',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197593.png',
    },
    {
      name: 'Japan',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197604.png',
    },
    {
      name: 'Brazil',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197386.png',
    },
    {
      name: 'South korea',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197582.png',
    },
    {
      name: 'Russia',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197408.png',
    },
    {
      name: 'European union',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197615.png',
    },
    {
      name: 'Canada',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197430.png',
    },
    {
      name: 'Australia',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197507.png',
    },
    {
      name: 'India',
      image: 'https://cdn-icons-png.flaticon.com/256/197/197419.png',
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.floatCard}>
          <View style={styles.floatCardContent}>
            <MonoText bold color={colors.black}>
              Visa Wizard
            </MonoText>
            <Text>
              Please Click on Apply Now Button To Add your nationality to check
              your visa eligibility and requirements for your destination
              country.
            </Text>
            <TouchableOpacity style={styles.btn}>
              <MonoText size={16} color={colors.white}>
                Apply Now
              </MonoText>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={require('../../assets/png/world.png')} />
      </View>

      <View style={styles.textContainer}>
        <HackerText text="Where do you want to go ?" bold size={17} />
        <View style={styles.searchContainer}>
          <Image source={require('../../assets/png/search.png')} />
          <TextInput
            style={styles.input}
            placeholder="Search Here..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
            }}
            returnKeyType="search"
          />
        </View>
        <View style={styles.flagsContainer}>
          <FlagsList flags={countries} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
