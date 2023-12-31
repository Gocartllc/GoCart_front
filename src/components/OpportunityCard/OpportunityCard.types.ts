// This import assumes you are using react-native-vector-icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export interface OpportunityProps {
    title: string | number | any;
    value: number | any;
    trend: 'up' | 'down';
    trendPercentage: number;
    icon?: string; 
    maticon?: string;
    ionicon?: string;
    fontaweicon?: string;
  }
  