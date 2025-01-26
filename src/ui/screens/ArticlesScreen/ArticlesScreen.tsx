import React, {useContext, useEffect, useState } from 'react';
import useFetchNews from '../../hooks/useFetchNews';
import RowsSkeleton from '../../components/molecules/RowsSkeleton/RowsSkeleton';
import WebViewModal from '../../components/molecules/WebViewModal/WebViewModal';
import { AppContext } from '../../../data/store/Context';
import useDeletedNews from '../../hooks/useDeletedNews';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import notificationService from '../../services/NotificationService';
import ArticlesScreenStyles from './ArticlesScreen.style';
import { Article } from '../../../domain/interfaces/article';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import { View } from 'react-native';

function ArticlesScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);
    const { state } = useContext(AppContext);
    const { loading, news } = state;
    const style = ArticlesScreenStyles;

    //utils
    const stopRefresh = () => {
        setRefreshing(false);
    };

    const onPressCell = (item: Article) => {
        if (item.url) {
            setCurrentUrl(item.url);
            setModalVisible(true);
        } else {
            notificationService.showDangerToast('🚨 Oh no!', 'We cannot open this article 😢');
        }
    };

   //Hooks
    const { fetchNews } = useFetchNews(stopRefresh, stopRefresh);
    const {addToDeleted} = useDeletedNews();
    const {addToFavorites} = useFavoritesNews();

    const onFavorite = (item: Article) => {
        notificationService.showInfoToast('🥳 God news!', 'The article has been added to your favorites 🎉');
        addToFavorites(item,()=>{console.log('[!@#] added to favorites');},()=>{console.log('[!@#] NOT added')});
    };

    const onDelete = (item: Article) => {
        notificationService.showDangerToast('🗑️ So sad to let it go... ', 'The article has been deleted and will not be shown again 👋');
        addToDeleted(item,()=>{console.log('[!@#] added to deleted');},()=>{console.log('[!@#] NOT deleted')})        
    };

    //effects
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
        <View
            style={style.scrollView}>
            {loading ? (
                <RowsSkeleton />
            ) : (
                news && (
                    <SwipeableList
                    data={news}
                    renderTitle={(item) => item.title}
                    renderDetails={(item) => item.author}
                    firstAction={{ name: 'star-o', action: onFavorite }}
                    secondAction={{ name: 'trash-o', action: onDelete }}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    onPress={onPressCell}
                  />
                )
            )}
            {
                modalVisible && currentUrl && <WebViewModal
                visible={modalVisible}
                url={currentUrl}
                onClose={() => setModalVisible(false)}
            />
            }

        </View>
    );
}

export default ArticlesScreen;
