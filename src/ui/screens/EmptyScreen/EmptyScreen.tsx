import React from 'react';
import { empty } from '../../assets';
import LottieSection from '../../components/molecules/LottieSection/LottieSection';

const EmptyScreen = () => {
    return (
            <LottieSection lottieSource={empty}  message="Ups!, you haven't added anything yet" />
    );
};

export default EmptyScreen;
