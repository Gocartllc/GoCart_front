import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart, ProgressChart } from 'react-native-chart-kit';
import { ProgressCardPieProps } from './ProgressCardPie.types';
import { styles } from './ProgressCardPie.styles';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

  

const ProgressCardPie: React.FC<ProgressCardPieProps> = ({ title, minutes, goalPercentage }) => {
  const chartConfig = {
    backgroundGradientFromOpacity: 1,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255,0,0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const data = [
    { name: '', population: goalPercentage, color: "#4f5d75", legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name:'', population :100 - goalPercentage , color: "rgba(79, 93, 117, .8)", legendFontColor:'#7F7F7F', legendFontSize :12 }
];

    return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
        <PieChart 
        data={data} 
        width={100} 
        height={100} 
        hasLegend={false}
        chartConfig={chartConfig} 
        accessor="population" 
        backgroundColor="transparent" 
        paddingLeft="15"
        />
       <Text style={styles.value}>{minutes} mins</Text>
      <Text style={styles.goal}>{goalPercentage}% of your goal</Text>
    </View>
    );
    };
    



  export default ProgressCardPie;