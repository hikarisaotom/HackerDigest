import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';
import newsScreenStyles from './NewsScreen.style';
import useFetchNews from '../../hooks/useFetchNews';

function NewsScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const style = newsScreenStyles;

    const onSuccess = () => {
        console.log('Data fetched successfully:');
        setRefreshing(false);
    };

    const onError = () => {
        console.error('Error fetching data:',data);
        setRefreshing(false);
    };

    const { data, loading, error, fetchNews } = useFetchNews(onSuccess, onError);

    useEffect(() => {
        fetchNews();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchNews();
    }, [fetchNews]);
    return (
        <ScrollView
            contentContainerStyle={style.scrollView}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error fetching data!</Text>}
            {data &&
                data.map((item, index) => (
                    < >
                    <Text >{ item.title ?? item.story_title ?? item.comment_text}</Text>
                    <Text>{ item.author ?? ""}</Text>
                    <Text>{ item.created_at ?? ""}</Text>
                    </>
                    )
            )}
        </ScrollView>
    );
}

export default NewsScreen;
