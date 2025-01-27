import React, { useContext } from 'react';
import useDeletedNews from '../../hooks/useDeletedNews';
import { AppContext } from '../../../data/store/Context';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import EmptyScreen from '../EmptyScreen/EmptyScreen';
import { View } from 'react-native';
import { Article } from '../../../domain/interfaces/article';
import ArticlesScreenStyles from '../ArticlesScreen/ArticlesScreen.style';



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
                secondAction={{ name: 'star', action: onRemove }}
            />
            : <EmptyScreen/>
            }
        </View>
    );
};

export default FavoritesScreen;
