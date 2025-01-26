import { useContext, useCallback } from 'react';
import { AppContext } from '../../data/store/Context';
import getDeletedUseCase from '../../domain/useCases/deleteNews/getDeletedUseCase';
import { Article } from '../../domain/interfaces/article';


const useDeletedNews = () => {
  const {dispatch } = useContext(AppContext);

  const fetchDeleted = async () => {
    try {
      const result = await getDeletedUseCase();
      dispatch({ type: 'setDeletedArticles', payload: result });
      return result;
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
      return [];
    }
  };

  const addToDeleted = async (deleted: Article, onSuccess?: () => void, onError?: () => void) => {
    try {
      console.log('[!@#] ARTICLE TO DELETE', deleted.title);
      dispatch({ type: 'deleteArticle', payload: deleted });
      if (onSuccess) {onSuccess();}
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
      if (onError) {onError();}
    }
  };

  const restoreArticleDeleted = async (deleted: Article, onSuccess?: () => void, onError?: () => void) => {
    try {
      dispatch({ type: 'restoreArticle', payload: deleted });
      if (onSuccess) {onSuccess();}
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
      if (onError) {onError();}
    }
  };

  return { fetchDeleted, addToDeleted , restoreArticleDeleted};
};

export default useDeletedNews;
