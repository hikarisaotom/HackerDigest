import React, { useContext, useEffect, useState } from 'react';
import useFetchNews from '../../hooks/useFetchNews';
import RowsSkeleton from '../../components/molecules/RowsSkeleton/RowsSkeleton';
import WebViewModal from '../../components/molecules/WebViewModal/WebViewModal';
import { AppContext } from '../../../data/store/Context';
import useDeletedNews from '../../hooks/useDeletedNews';
import notificationService from '../../services/NotificationService';
import ArticlesScreenStyles from './ArticlesScreen.style';
import { Article } from '../../../domain/interfaces/article';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import { View } from 'react-native';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import i18n from 'i18next';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import customTheme from '../../styles/CustomTheme';

function ArticlesScreen() {
    const { state } = useContext(AppContext);
    const { loading, news, favoriteNews } = state;
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);

    const style = ArticlesScreenStyles;

    // Utils
    const stopRefresh = () => {
        setRefreshing(false);
    };

    const onPressCell = (item: Article) => {
        if (item.url) {
            setCurrentUrl(item.url);
            setModalVisible(true);
        } else {
            let title = i18n.t('toasts.no_url_error_title');
            let message = i18n.t('toasts.no_url_error_message');
            notificationService.showDangerToast(title, message);
        }
    };

    // Hooks
    const { fetchNews } = useFetchNews(stopRefresh, stopRefresh);
    const { addToDeleted } = useDeletedNews();
    const { addToFavorites, removeFromFavorites } = useFavoritesNews();
    const toggleFavorite = (item: Article) => {
        const isFavorite = favoriteNews.some((fav: Article) => fav.id === item.id);
        if (isFavorite) {
            // Remove from favorites
            removeFromFavorites(item);
        } else {
            // Add to favorites
            addToFavorites(item);
        }
    };

    const onDelete = (item: Article) => {
        addToDeleted(item);
    };

    // Effects
    useEffect(() => {
        fetchNews();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchNews().then(() => {
            setRefreshing(false);
        });
    };

    return (
        <View style={style.scrollView}>
            {loading ? (
                <RowsSkeleton />
            ) : (
                news && (
                    news.length === 0 ? <ErrorScreen /> :
                        <SwipeableList
                            data={news}
                            firstAction={{
                                computedName: (item: Article) =>
                                    favoriteNews.some((fav: Article) => fav.id === item.id) ?  'bookmark' : 'bookmark-o' ,
                                action: toggleFavorite,
                                color:(item: Article) =>
                                    favoriteNews.some((fav: Article) => fav.id === item.id) ?  customTheme.colors.analogousDeepLavender : customTheme.colors.analogousLavender ,
                            }}
                            secondAction={{ name: 'trash-o', action: onDelete, color: ()=>{return customTheme.colors.complementary}}}
                            onRefresh={onRefresh}
                            refreshing={refreshing}
                            onPress={onPressCell}
                        />
                )
            )}
            {modalVisible && currentUrl && (
                <WebViewModal
                    visible={modalVisible}
                    url={currentUrl}
                    onClose={() => setModalVisible(false)}
                />
            )}
        </View>
    );
}

export default ArticlesScreen;
