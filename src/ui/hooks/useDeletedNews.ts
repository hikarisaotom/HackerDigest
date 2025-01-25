import { useContext, useCallback, useEffect } from 'react';
import { AppContext } from '../../data/store/Context';
import { Hit } from '../../domain/interfaces/news';
import getDeletedUseCase from '../../domain/useCases/deleteNews/getDeletedUseCase';


const useDeletedNews = () => {
  const {dispatch } = useContext(AppContext);

  const fetchDeleted = useCallback(async () => {
    try {
      const result = await getDeletedUseCase();
      dispatch({ type: 'setDeletedArticles', payload: result });
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
    }
  }, [dispatch]);

  const addToDeleted = useCallback(async (deleted: Hit, onSuccess: () => void, onError: () => void) => {
    try {
      console.log('[!@#] ARTICLE TO DELETE', deleted.title ?? deleted.story_title ?? deleted.comment_text);
      dispatch({ type: 'deleteArticle', payload: deleted });
    } catch (err) {
      dispatch({ type: 'setError', payload: 'Something went wrong' });
      onError();
    }
  }, [dispatch]);


  return { fetchDeleted, addToDeleted };
};

export default useDeletedNews;
