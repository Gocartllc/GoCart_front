export type Opportunity = {
    fontaweicon?: string | undefined;
    ionicon?: string | undefined;
    title: string;
    value: number | string;
    trend: 'up' | 'down';
    trendPercentage: number;
  };
  
export type Booking = {
    month: string;
    converted: number;
    lost: number;
  };