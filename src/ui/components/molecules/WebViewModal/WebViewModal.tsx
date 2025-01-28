import React from 'react';
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewModalStyles from './WebViewModal.style';
import i18n from 'i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import customTheme from '../../../styles/CustomTheme';
import notificationService from '../../../services/NotificationService';

interface WebViewModalProps {
    visible: boolean;
    url: string;
    onClose: () => void;
}

const WebViewModal = ({ visible, url, onClose }: WebViewModalProps) => {
    const styles = WebViewModalStyles;
    let title = i18n.t('toasts.no_url_error_title');
    let message = i18n.t('toasts.no_url_error_message');
    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            style={styles.modalContainer}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>
                            <Icon name="close" size={25} color={customTheme.colors.info} />
                        </Text>
                    </TouchableOpacity>
                </View>

                <WebView source={{ uri: url }} style={styles.webview} onError={() => notificationService.showDangerToast(title, message)} />

            </SafeAreaView>
        </Modal>
    );
};

export default WebViewModal;
