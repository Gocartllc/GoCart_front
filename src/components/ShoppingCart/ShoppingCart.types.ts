export interface Item {
  name: string;
  price: number;
  quantity: number;
  imagePath?: any;  // Use 'any' for local images, as 'require' returns an unknown object
  imageUrl?: string; // For remote images
}

export interface Props {
  items?: Item[];
  onEdit?: (index: number) => void;
  onRepeat?: () => void;
  onPay?: () => void;
}
