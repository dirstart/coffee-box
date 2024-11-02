export interface CoffeeRecommendation {
  name: string;
  description: string;
  image: string;
  caffeine: string;
  calories: string;
  type: string;
}

export interface UserSelection {
  timestamp: string;
  questionId: string;
  question: string;
  answer: string;
  answerLabel: string;
}

export interface CoffeeHistory {
  selections: UserSelection[];
  recommendation: CoffeeRecommendation;
  mode: 'text' | 'visual' | 'random';
  timestamp: string;
}
