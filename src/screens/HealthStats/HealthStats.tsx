import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './HealthStats.styles';


const data = {
  labels: ["Calories", "Sleep", "Walk", "Heart rate"], 
  data: [0.4, 0.6, 0.8, 0.2]
};

const HealthStats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>hi, Melissa</Text>
      
      <View style={styles.card}>
        <Text style={styles.title}>Health Score</Text>
        <ProgressChart
          data={data}
          width={200}
          height={200}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
        />
        <Text>84</Text>
        <Text>Lorem ipsum dolor sit amet tibium suscipit pulvinar at leo.</Text>
        <Text style={{color:'blue'}}>View Details</Text>
      </View>

      {/* Other UI elements like icons and texts can be added similarly */}
      
    </View>
)}

export default HealthStats;
