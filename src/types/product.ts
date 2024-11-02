export interface ProductTag {
  id: string;
  name: string;
  color: string;
  backgroundColor: string;
}

export interface Product {
  productId: string;
  productName: string;
  thumbnailUrl: string;
  englishName?: string;
  tags?: ProductTag[];
  nutritionInfo?: {
    gi: number;
    calories: number;
    protein: number;
    transFat: number;
    carbs: number;
    fat: number;
  };
}
