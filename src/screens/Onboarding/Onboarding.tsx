import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FoundIcon from 'react-native-vector-icons/Foundation';
import Swiper from '@components/Swiper';
import { OnboardingProps } from './Onboarding.types';
import { Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/navigationStacktypes';
import { RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type OnboardingNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

type Props = {
  navigation: OnboardingNavigationProp;
  route: RouteProp<RootStackParamList, 'MainTab'>;
};

export default class Onboarding extends Component<Props> {

  handleNavigateToStoreSelection = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Swiper 
      onLastSlideButtonPress={this.handleNavigateToStoreSelection}
      >
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
        <MaterialCommunityIcons name="thought-bubble" {...iconStyles} />
          <Text style={styles.header}>Choose your Diet</Text>
          <Text style={styles.text}>Choose from a variety of different diet styles or just go general.</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#ffc342' }]}>
        <Ionicons name="time-outline" {...iconStyles} />
          <Text style={styles.header}>Pick your meal settings</Text>
          <Text style={styles.text}>Need a new recipe for breakfast? Whatever your meal setting needs are get meal plans to fit any meal setting you're intersted in!</Text>
        </View>
        
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <AntDesign name="filter" {...iconStyles} />
          <Text style={styles.header}>Add your filters</Text>
          <Text style={styles.text}>With GoCart we account for falvor profile preference, dietary restrictions and calorie goals</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <FontAwesome6 name="hot-tub-person" {...iconStyles} />
          <Text style={styles.header}>Enjoy custom meal plans</Text>
          <Text style={styles.text}>When you're done designing your meal plan sit back and let us generate a set meals unique to you.</Text>
        </View>
      </Swiper>
      
    );
  }
}

//Need to sperate out the styles
const iconStyles = {
  size: 100,
  color: '#FFFFFF',
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});
