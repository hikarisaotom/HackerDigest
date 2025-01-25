import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewModalStyles from './WebViewModal.style';

interface WebViewModalProps {
    visible: boolean;
    url: string | null;
    onClose: () => void;
}

const WebViewModal = ({ visible, url, onClose }:WebViewModalProps) => {
    const styles = WebViewModalStyles;
    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
                {url ? (
                    <WebView source={{ uri: url }} style={styles.webview} />
                ) : (
                    <Text style={styles.errorText}>No URL available</Text>
                )}
            </View>
        </Modal>
    );
};
export default WebViewModal;
