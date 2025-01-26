import React, { useContext, useEffect} from 'react';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import useDeletedNews from '../../hooks/useDeletedNews';
import { AppContext } from '../../../data/store/Context';
import notificationService from '../../services/NotificationService';
import { Article } from '../../../domain/interfaces/article';
import { View } from 'react-native';
import EmptyScreen from '../EmptyScreen/EmptyScreen';
import ArticlesScreenStyles from '../ArticlesScreen/ArticlesScreen.style';


const DeletedArticlesScreen = () => {
    const { state } = useContext(AppContext);
    const { deleteNews } = state;
    const onRestore = (item: Article) => {
        notificationService.showSucessToast('🎉 Welcome back!', 'The article has been restored 🎉');
    };
    const style = ArticlesScreenStyles;
    return (
        <View  style={style.scrollView}>
            {
               deleteNews.length > 0 ? <SwipeableList
                data={deleteNews}
                renderTitle={(item) => item.title}
                renderDetails={(item) => item.author}
                firstAction={{ name: 'Restore', action: onRestore }}
            />
            : <EmptyScreen/>
            }
        </View>
    );
};

export default DeletedArticlesScreen;
