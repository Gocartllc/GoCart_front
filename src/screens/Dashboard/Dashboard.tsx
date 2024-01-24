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
import RecipeCard from '@components/RecipeCard';



type DashboardProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MainTab'>;
};



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
  <StartButton title={"New Plan"} onPress={() => navigation.navigate('StoreSelectionUI')}/>
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

    <Text style={[{paddingBottom:20}]}></Text>

 <Text style={[styles.discoverMoreTitle,{paddingBottom:20}]}>Meal Plans</Text>
<RecipeCard
  dishName="Meal Itineraries"
  timeEstimate="30 mins"
  imagePath={require('../../images/mealplan.png')}
  onPress={() => navigation.navigate('RecipeSearchPage')}
  cardWidth={300}
  cardPadding={15}
  cardHeight={190}
/>

<Text style={[{paddingBottom:20}]}></Text>

<Text style={[styles.discoverMoreTitle,{paddingBottom:20}]}>Recipes</Text>
<RecipeCard
  dishName="Lets get cooking!"
  timeEstimate="30 mins"
  imagePath={require('../../images/recipe.png')}
  onPress={() => navigation.navigate('RecipeSearchPage')}
  cardWidth={300} // custom width
  cardPadding={15} // custom padding
  cardHeight={190}
/>

<Text style={[{paddingBottom:15}]}></Text>


<Text style={styles.discoverMoreTitle}>Discover More</Text>

<TouchableOpacity style={styles.articleCard}>
  <View style={styles.articleImageContainer}>
    <Image
      source={require('../../images/drinking_water.jpg')}
      style={styles.articleImage}
    />
  </View>
  <View style={styles.articleContent}>
    <Text style={styles.articleTitle}>How much water do you need?</Text>
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
    <Text style={styles.articleTitle}>What exercises are right for me?</Text>
    <View style={styles.interactions}>
    <Text style={styles.interactionText}><Ionicons name={"heart"} size={28} color={"#2dd881"} /> 5k</Text>
    </View>
  </View>
</TouchableOpacity>



  



    </ScrollView>
  );
};

export default Dashboard;
