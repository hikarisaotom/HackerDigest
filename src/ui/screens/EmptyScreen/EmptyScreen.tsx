import React from 'react';
import { empty } from '../../assets';
import LottieSection from '../../components/molecules/LottieSection/LottieSection';
import i18n from 'i18next';
const EmptyScreen = () => {
    return (
        <LottieSection lottieSource={empty} title={i18n.t('empty.title')} message={i18n.t('empty.message')}/>
    );
};

export default EmptyScreen;
