import React, { useContext } from 'react';
import useDeletedNews from '../../hooks/useDeletedNews';
import { AppContext } from '../../../data/store/Context';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import notificationService from '../../services/NotificationService';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import EmptyScreen from '../EmptyScreen/EmptyScreen';
import { View } from 'react-native';
import { Article } from '../../../domain/interfaces/article';
import ArticlesScreenStyles from '../ArticlesScreen/ArticlesScreen.style';



const FavoritesScreen = () => {
    const { addToDeleted} = useDeletedNews();
    const { removeFromFavorites} = useFavoritesNews();
    const { state } = useContext(AppContext);
    const { favoriteNews } = state;
    const onDelete = (item: Article) => {
        notificationService.showDangerToast('🗑️ So sad to let it go... ', 'The article has been deleted and will not be shown again 👋');
        addToDeleted(item,()=>{console.log('[!@#] added to deleted');},()=>{console.log('[!@#] NOT deleted')});
    };
    const onRemove = (item: Article) => {
        notificationService.showInfoToast('you cannot always be everyone s favorite', 'The article has been removed from your favorites');
        removeFromFavorites(item,()=>{console.log('[!@#] removed from favorites');},()=>{console.log('[!@#] NOT removed')});
    };
    const style = ArticlesScreenStyles;
    return (
        <View   style={style.scrollView}>
            {
                favoriteNews.length > 0 ? <SwipeableList
                data={favoriteNews}
                renderTitle={(item) => item.title}
                renderDetails={(item) => item.author}
                firstAction={{ name: 'star', action: onRemove }}
                secondAction={{ name: 'trash-o', action: onDelete  }}
            />
            : <EmptyScreen/>
            }
        </View>
    );
};

export default FavoritesScreen;
