import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ArticleListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Articles'
>;

type ArticleListScreenRouteProp = RouteProp<RootStackParamList, 'Articles'>;

type RootStackParamList = {
  Articles: undefined;
  Favorites: undefined;
  DeletedArticles: undefined;
  Settings: undefined;
  About: undefined;
};
