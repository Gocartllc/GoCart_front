import OpportunityCard from '@components/OpportunityCard';
import React, { useState } from 'react';
import { ScrollView, StatusBar, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, accountStyles, badgeStyles, ICON_COLORS } from './Dashboard.styles';
import { Booking, Opportunity } from './Dashboard.types';
import { Avatar } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressCardPie from '@components/ProgressCardPie';
import ProgressCard from '@components/ProgressCard';
import StartButton from '@components/StartButton/StartButton';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign
import { RootStackParamList } from '@navigation/navigationStacktypes';
import { StackNavigationProp } from '@react-navigation/stack';



type DashboardProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Dashboard'>;
};


const opportunities: Opportunity[] = [
  { title: 'Meal Plans', value: 36, trend: 'down', trendPercentage: 17, fontaweicon: "book"},
  { title: 'Recipes', value: 26, trend: 'up', trendPercentage: 0, fontaweicon: "book" },
  { title: 'Shopping Cart', value: 17, trend: 'up', trendPercentage: 8, fontaweicon: "shopping-cart" },
  { title: 'Health Stats', value: '300 cals consumed', trend: 'down', trendPercentage: 22, ionicon: "stats-chart" },
];

const bookings: Booking[] = [
  { month: 'January', converted: 120000, lost: 30000 },
  { month: 'February', converted: 85000, lost: 25000 },
  { month: 'March', converted: 90000, lost: 20000 },
  { month: 'April', converted: 160000, lost: 40000 },
];


const Dashboard = ({ navigation}: DashboardProps): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('summary');
  const totalBudget = 900;
  const spentAmount = 100.00;
  const remainingBudget = totalBudget - spentAmount;
  const pieData = [
    { value: spentAmount, color: '#428bff' },
    { value: remainingBudget, color: '#00e396', }, 
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon}>
        <AntDesign name="setting" size={30} color="#4f5d75"/>
      </TouchableOpacity>
      <View style={{bottom:10, paddingBottom:37}}>
  <StartButton title={"New Plan"} onPress={() => navigation.navigate('ChooseDietType')}/>
</View>
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
  <TouchableOpacity style={badgeStyles.badgeContainer}>
    <View style={[badgeStyles.iconCircle, { backgroundColor: ICON_COLORS.purple }]}>
      <Entypo name={'price-ribbon'} size={20} color={'#FFFFFF'}/>
    </View>
    <Text style={badgeStyles.badgeNumber}>25</Text>
    <Text style={badgeStyles.badgeText}>Goals Met</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={badgeStyles.badgeContainer}>
    <View style={[badgeStyles.iconCircle, { backgroundColor: ICON_COLORS.orange }]}>
      <Fontisto name={'stopwatch'} size={20} color={'#FFFFFF'}/>
    </View>
    <Text style={badgeStyles.badgeNumber}>210</Text>
    <Text style={badgeStyles.badgeText}>Exercise Time (h)</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={badgeStyles.badgeContainer}>
    <View style={[badgeStyles.iconCircle, { backgroundColor: ICON_COLORS.yellow }]}>
      <FontAwesome name={'heartbeat'} size={20} color={'#FFFFFF'}/>
    </View>
    <Text style={badgeStyles.badgeNumber}>92</Text>
    <Text style={badgeStyles.badgeText}>Health Score</Text>
  </TouchableOpacity>
</View>

<Text style={styles.discoverMoreTitle}>Today's Goals</Text>
<View style={styles.progressCardsContainer}>
      <ProgressCardPie title="Exercise" minutes={40} goalPercentage={60}/>
      <ProgressCard title="Calories" value={500} limit={1200} />
    </View>

<Text style={styles.discoverMoreTitle}>Discover More</Text>

<TouchableOpacity style={styles.articleCard}>
  <View style={styles.articleImageContainer}>
    <Image
      source={require('../../images/drinking_water.jpg')}
      style={styles.articleImage}
    />
  </View>
  <View style={styles.articleContent}>
    <Text style={styles.articleTitle}>How Much Water do you need?</Text>
    <View style={styles.interactions}>
      <Text style={styles.interactionText}><Ionicons name={"heart"} size={28} color={"#2dd881"} /> 5k</Text>
    </View>
  </View>
</TouchableOpacity>


<TouchableOpacity style={styles.articleCard}>
  <View style={styles.articleImageContainer}>
    <Image
        source={ require('../../images/woman_exercisin.jpg')}
        style={styles.articleImage}
    />
  </View>
  <View style={styles.articleContent}>
    <Text style={styles.articleTitle}>How Much Water do you need?</Text>
    <View style={styles.interactions}>
    <Text style={styles.interactionText}><Ionicons name={"heart"} size={28} color={"#2dd881"} /> 5k</Text>
    </View>
  </View>
</TouchableOpacity>



  

<View style={{paddingTop:50}}>

      <TouchableOpacity style={styles.section} onPress={() => console.log("Navigate to The Recipe")}>
        <Text style={styles.subtitle}>Your Breakfast for Today:</Text>
          <Text style={styles.content}>
             Fried Rice with Honey Seared Tofu
          </Text>
      </TouchableOpacity>
 </View>

    </ScrollView>
  );
};

export default Dashboard;
