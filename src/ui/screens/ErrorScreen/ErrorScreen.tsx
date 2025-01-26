import React from 'react';
import LottieSection from '../../components/molecules/LottieSection/LottieSection';
import { search } from '../../assets';

const ErrorScreen = () => {
    return (
        <LottieSection lottieSource={search} message="Sorry, looks like we could not load the information " />
    );
};

export default ErrorScreen;
