import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './OpportunityCard.styles';
import { OpportunityProps } from './OpportunityCard.types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const OpportunityCard: React.FC<OpportunityProps> = ({ title, value, trend, trendPercentage, maticon, ionicon, fontaweicon }) => {
    return (
      <View style={styles.opportunityCard}>
        <MaterialCommunityIcons name={maticon} size={40} color="#fff" />
        <Ionicons name={ionicon} size={40} color="#fff" style={{top:15}}/>
        <FontAwesome5 name={fontaweicon} size={40} color="#fff" />
  
        <Text style={styles.opportunityTitle}>{title}</Text>
        <Text style={styles.opportunityValue}>{value}</Text>
        <Text style={[styles.opportunityTrend, trend === 'up' ? styles.trendUp : styles.trendDown]}>
        </Text>
      </View>
    );
  };
  
  export default OpportunityCard;