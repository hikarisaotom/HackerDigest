import React from 'react';
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewModalStyles from './WebViewModal.style';
import i18n from 'i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import customTheme from '../../../styles/CustomTheme';

interface WebViewModalProps {
    visible: boolean;
    url: string | null;
    onClose: () => void;
}

const WebViewModal = ({ visible, url, onClose }: WebViewModalProps) => {
    const styles = WebViewModalStyles;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>
                            <Icon name="close" size={25} color={customTheme.colors.info} />
                        </Text>
                    </TouchableOpacity>
                </View>
                {url ? (
                    <WebView source={{ uri: url }} style={styles.webview} />
                ) : (
                    <Text style={styles.errorText}>
                        {i18n.t('toasts.no_url_error_message')}
                    </Text>
                )}
            </SafeAreaView>
        </Modal>
    );
};

export default WebViewModal;
