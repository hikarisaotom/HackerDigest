import React from 'react';
import LottieSection from '../../components/molecules/LottieSection/LottieSection';
import { search } from '../../assets';
import i18n from 'i18next';
const ErrorScreen = () => {
    return (
        <LottieSection lottieSource={search} title={i18n.t('error.title')} message={i18n.t('error.message')} />
    );
};
export default ErrorScreen;
