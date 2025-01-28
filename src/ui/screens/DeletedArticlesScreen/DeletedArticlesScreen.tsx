import React, { useContext} from 'react';
import SwipeableList from '../../components/molecules/SwipeableList/SwipeableList';
import useDeletedNews from '../../hooks/useDeletedNews';
import { AppContext } from '../../../data/store/Context';
import { Article } from '../../../domain/interfaces/article';
import { View } from 'react-native';
import EmptyScreen from '../EmptyScreen/EmptyScreen';
import ArticlesScreenStyles from '../ArticlesScreen/ArticlesScreen.style';


const DeletedArticlesScreen = () => {
    const { state } = useContext(AppContext);
    const { deleteNews } = state;
    const { restoreArticleDeleted } = useDeletedNews();
    const onRestore = (item: Article) => {
        restoreArticleDeleted(item);
    };
    const style = ArticlesScreenStyles;
    return (
        <View  style={style.scrollView}>
            {
               deleteNews.length > 0 ? <SwipeableList
                data={deleteNews}
                onPress={() => {}}
                secondAction={{ name: 'undo', action: onRestore }}
            />
            : <EmptyScreen/>
            }
        </View>
    );
};

export default DeletedArticlesScreen;
