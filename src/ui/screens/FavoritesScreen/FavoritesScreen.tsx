import React, { useContext } from 'react';
import useDeletedNews from '../../hooks/useDeletedNews';
import { AppContext } from '../../../data/store/Context';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import EmptyScreen from '../EmptyScreen/EmptyScreen';
import { View } from 'react-native';
import { Article } from '../../../domain/interfaces/article';
import ArticlesScreenStyles from '../ArticlesScreen/ArticlesScreen.style';
import customTheme from '../../styles/CustomTheme';



const FavoritesScreen = () => {
    const { removeFromFavorites} = useFavoritesNews();
    const { state } = useContext(AppContext);
    const { favoriteNews } = state;
    const onRemove = (item: Article) => {
        removeFromFavorites(item);
    };
    const style = ArticlesScreenStyles;
    return (
        <View   style={style.scrollView}>
            {
                favoriteNews.length > 0 ? <SwipeableList
                data={favoriteNews}
                onPress={() => {}}
                secondAction={{ name: 'bookmark', action: onRemove, color: ()=>{return customTheme.colors.analogousDeepLavender;}  }}
            />
            : <EmptyScreen/>
            }
        </View>
    );
};

export default FavoritesScreen;
