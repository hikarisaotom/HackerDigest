import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Switch, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import notificationService from '../../services/NotificationService';
import { AppContext } from '../../../data/store/Context';

const SettingsScreen: React.FC = () => {
    const { state, dispatch} = useContext(AppContext);
    const [value, setValue] = useState(state.notificationPreferences.articleType);
    const [minutes, setMinutes] = useState<number | string>(state.notificationPreferences.timeInterval / 60 / 1000);
    const [notificationsEnabled, setNotificationsEnabled] = useState(state.notificationPreferences.sendNotifications);

    const handleSave = () => {
        dispatch({
            type: 'setNotificationPreferences',
            payload: {
                sendNotifications: notificationsEnabled,
            timeInterval: Number(minutes) * 60 * 1000,
            articleType: value,
            },
        });
        notificationService.showSucessToast('Settings saved', 'Settings saved successfully');
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>

                {/* Text input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter value"
                    value={value}
                    onChangeText={setValue}
                />

                {/* Number input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter minutes"
                    keyboardType="numeric"
                    value={String(minutes)}
                    onChangeText={(text) => setMinutes(text)}
                />

                {/* Toggle for notifications */}
                <View style={styles.toggleContainer}>
                    <Text>Enable Notifications</Text>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                </View>

                {/* Save button */}
                <Button title="Save" onPress={handleSave} />
                <Button title="Test Notification" onPress={()=>{notificationService.showNotification('Test','Test Notification','https://github.com/hikarisaotom');}} />
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f4f4f9',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 4,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default SettingsScreen;
