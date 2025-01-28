import React, { useContext, useState } from 'react';
import { View, TextInput, Switch, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider, Button, Divider } from 'react-native-paper';
import notificationService from '../../services/NotificationService';
import { AppContext } from '../../../data/store/Context';
import useNotificationPreferences from '../../hooks/useNotificationPreferences';
import { NotificationPreferences } from '../../../domain/interfaces/notifications';
import i18n from 'i18next';
import SettingsScreenStyles from './SettingsScreen.style';

const SettingsScreen = () => {
    const { state } = useContext(AppContext);
    const { saveNotificationPreferences } = useNotificationPreferences();
    const [searchValue, setSearchValue] = useState(state.notificationPreferences.articleType);
    const [minutes, setMinutes] = useState<number | string>(state.notificationPreferences.timeInterval / 60 / 1000);
    const [notificationsEnabled, setNotificationsEnabled] = useState(state.notificationPreferences.sendNotifications);
    const styles = SettingsScreenStyles;
    const handleSave = () => {
        const preferences: NotificationPreferences = {
            articleType: searchValue,
            timeInterval: Number(minutes) * 60 * 1000,
            sendNotifications: notificationsEnabled,
        };
        saveNotificationPreferences(preferences);
    };

    return (
        <ScrollView>

            <PaperProvider>
                <View style={styles.container}>
                    <Text style={styles.header}>{i18n.t('settings.title')}</Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{i18n.t('settings.article_type_title')}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={i18n.t('settings.article_type_placeholder')}
                            value={searchValue}
                            onChangeText={setSearchValue}
                        />
                    </View>

                    <Divider style={styles.divider} />

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{i18n.t('settings.notification_interval_title')}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={i18n.t('settings.notification_interval_placeholder')}
                            keyboardType="numeric"
                            value={String(minutes)}
                            onChangeText={(text) => setMinutes(text)}
                        />
                    </View>

                    <Divider style={styles.divider} />

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{i18n.t('settings.enable_notifications_title')}</Text>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleLabel}>{i18n.t('settings.enable_notifications_label')}</Text>
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={setNotificationsEnabled}
                            />
                        </View>
                    </View>

                    <Divider style={styles.divider} />
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={handleSave}
                            style={styles.button}
                            labelStyle={styles.buttonText}
                        >
                            {i18n.t('settings.save')}
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={() => {
                                if (notificationsEnabled) {
                                    notificationService.showNotification(
                                        i18n.t('notifications.test_notification_title'),
                                        i18n.t('notifications.test_notification_message'),
                                        'https://github.com/hikarisaotom'
                                    );
                                } else {
                                    notificationService.showDangerToast(
                                        i18n.t('toasts.notifications_disabled_title'),
                                        i18n.t('toasts.notifications_disabled_message')
                                    );
                                }
                            }}
                            style={styles.button}
                            labelStyle={styles.buttonTextOutlined}
                        >
                            {i18n.t('settings.test_option')}
                        </Button>
                    </View>
                </View>
            </PaperProvider>
        </ScrollView>
    );
};

export default SettingsScreen;
