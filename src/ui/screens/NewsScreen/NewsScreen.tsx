import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import newsScreenStyles from './NewsScreen.style';
import useFetchNews from '../../hooks/useFetchNews';
import { Hit } from '../../../domain/interfaces/news';
import { SwipeListView } from 'react-native-swipe-list-view';
import RowItem from '../../components/molecules/RowItem/RowItem';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';
import RowsSkeleton from '../../components/molecules/RowsSkeleton/RowsSkeleton';
import WebViewModal from '../../components/molecules/WebViewModal/WebViewModal';
import { AppContext } from '../../../data/store/Context';
import useDeletedNews from '../../hooks/useDeletedNews';
import useFavoritesNews from '../../hooks/useFavoritesNews';
import notificationService from '../../utils/Notifications';

function NewsScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentUrl, setCurrentUrl] = useState<string | null>(null);
    const { state } = useContext(AppContext);
    const { loading, news } = state;
    const style = newsScreenStyles;

    //utils
    const stopRefresh = () => {
        setRefreshing(false);
    };

    const onPressCell = (item: Hit) => {
        if (item.url || item.story_url) {
            setCurrentUrl(item.url ?? item.story_url ?? '');
            setModalVisible(true);
        } else {
            console.log('[!@#]No URL found for this item');
        }
    };

   //Hooks
    const { fetchNews } = useFetchNews(stopRefresh, stopRefresh);
    const {addToDeleted} = useDeletedNews();
    const {addToFavorites} = useFavoritesNews();

    const onDelete = (item: Hit) => {
        // addToDeleted(item,()=>{console.log('[!@#] added to deleted');},()=>{console.log('[!@#] NOT deleted')});
        // addToFavorites(item,()=>{console.log('[!@#] added to deleted');},()=>{console.log('[!@#] NOT deleted')});
        notificationService.showNotification('Deleted', 'Article deleted', item.url ?? item.story_url ?? '');
    };

    //effects
    useEffect(() => {
        fetchNews();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchNews();
    }, [fetchNews]);

    return (
        <View
            style={style.scrollView}>
            {loading ? (
                <RowsSkeleton />
            ) : (
                news && (
                    <SwipeListView
                        data={news}
                        renderItem={(row) => (
                            <RowItem
                                title={row.item.title ?? row.item.story_title ?? row.item.comment_text ?? ''}
                                autor={row.item.author ?? ''}
                                creationDate={row.item.created_at ?? ''}
                                onPressCell={() => onPressCell(row.item)}
                            />
                        )}
                        renderHiddenItem={(row) => (
                            <ActionButton onPressed={() =>  onDelete(row.item)} />
                        )}
                        leftOpenValue={0}
                        rightOpenValue={-75}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    />
                )
            )}
            <WebViewModal
                visible={modalVisible}
                url={currentUrl}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

export default NewsScreen;
