import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import newsScreenStyles from './NewsScreen.style';
import useFetchNews from '../../hooks/useFetchNews';
import { Hit } from '../../../domain/interfaces/news';
import { SwipeListView } from 'react-native-swipe-list-view';
import RowItem from '../../components/molecules/RowItem/RowItem';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';
import RowsSkeleton from '../../components/molecules/RowsSkeleton/RowsSkeleton';

function NewsScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const style = newsScreenStyles;

    const onSuccess = () => {
        setTimeout(() => {
            setRefreshing(false);
        }, 9000);
    };

    const onError = () => {
        setRefreshing(false);
    };

    const { data, loading, error, fetchNews } = useFetchNews(onSuccess, onError);

    useEffect(() => {
        fetchNews();
    }, []);

    const onPressCell = (item: Hit) => {
        console.log('[!@#]On pressed cell:', item);
    };

    const onSwippeCell = (item: Hit) => {
        console.log('[!@#]On swippe cell:', item);
    };

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
                data && (
                    <SwipeListView
                        data={data}
                        renderItem={(row) => (
                            <RowItem
                                title={row.item.title ?? row.item.story_title ?? row.item.comment_text ?? ''}
                                autor={row.item.author ?? ''}
                                creationDate={row.item.created_at ?? ''}
                                onPressCell={() => onPressCell(row.item)}
                            />
                        )}
                        renderHiddenItem={(row) => (
                            <ActionButton onPressed={() => onSwippeCell(row.item)} />
                        )}
                        leftOpenValue={0}
                        rightOpenValue={-75}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    />
                )
            )}
        </View>
    );
}

export default NewsScreen;
