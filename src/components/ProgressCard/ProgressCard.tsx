import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart, ProgressChart } from 'react-native-chart-kit';
import { ProgressCardProps } from './ProgressCard.types';
import { styles } from './ProgressCard.styles';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

  

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, limit }) => {
  const data = {
    labels: [""], // optional
    data: [value / limit]
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <ProgressChart
        data={data}
        width={100} // Adjust as needed
        height={100} // Adjust as needed
        strokeWidth={16}
        radius={32}
        hideLegend={true}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(45, 216, 129, ${opacity})`, // Adjust color as needed
          style: {
            borderRadius: 16,
          },
        }}
      />
      <Text style={styles.value}>{value} cal</Text>
      <Text style={styles.limit}>{Math.floor((value / limit) * 100)}% of daily limit</Text>
    </View>
  );
};
    



  export default ProgressCard;