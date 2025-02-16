import React, { useContext, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RefreshControl } from 'react-native-gesture-handler';
import { Article } from '../../../../domain/interfaces/article';
import ArticleRow from '../../atoms/ArticleRow/ArticleRow';
import ActionItem from '../../atoms/ActionItem/ActionItem';
import i18n from 'i18next';
import notificationService from '../../../services/NotificationService';
import customTheme from '../../../styles/CustomTheme';
import { AppContext } from '../../../../data/store/Context';

export interface Actions {
  name?: string;
  computedName?: (item: Article) => string;
  action: (item: Article) => void;
  color: (item?: Article) => string;
}

type SwipeableListProps = {
  data: Article[];
  firstAction?: Actions;
  secondAction?: Actions;
  onRefresh?: () => void;
  refreshing?: boolean;
};

const SwipeableList = ({
  data,
  firstAction,
  secondAction,
  onRefresh = () => { },
  refreshing = false,
}: SwipeableListProps) => {
  const [keyRow, setKeyRow] = useState('0');
  const renderDetails = (item: Article) => {
    return item.author + ' - ' + item.date;
  };
   const {dispatch } = useContext(AppContext);

  const onPressCell = (item: Article) => {
    if (item.url) {
      dispatch({ type: 'setUrl', payload: item.url });
    } else {
      let title = i18n.t('toasts.no_url_error_title');
      let message = i18n.t('toasts.no_url_error_message');
      notificationService.showDangerToast(title, message);
    }
  };
  return (
    <View style={styles.container} testID="swipeable-list">
      <StatusBar barStyle="dark-content" />
      <SwipeListView
        data={data.map((item, index) => ({
          key: index + '',
          item,
        }))}
        renderItem={({ item }) => (
          <ArticleRow
            item={item.item}
            onPress={onPressCell}
            renderDetails={renderDetails}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <ActionItem
            item={data.item.item}
            keyRow={keyRow}
            rowMap={rowMap}
            key={data.item.item.id + "-" + data.item.item.title}
            firstAction={firstAction}
            secondAction={secondAction}
          />
        )}
        leftOpenValue={0}
        rightOpenValue={firstAction && secondAction ? -150 : -75}
        disableRightSwipe={true}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onRowOpen={(rowKey, rowMap) => {
          setKeyRow(rowKey);
        }}
        closeOnRowPress={true}
        closeOnRowBeginSwipe={true}
      />
    </View>
  );
};

export default SwipeableList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.colors.background,
    flex: 1,
  },
});
