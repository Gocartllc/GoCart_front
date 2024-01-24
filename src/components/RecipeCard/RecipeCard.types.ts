export interface RecipeCardProps {
  dishName: string;
  timeEstimate?: string;
  imagePath: any;

  cardWidth?: number;
  imageWidth?: number;
  cardHeight?: number;

  cardPadding?: number;
  dishNameFontSize?: number;
  onPress?: () => void;
}
