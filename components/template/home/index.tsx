import React, { useEffect } from 'react';
import Header from '../../organisms/header';

const HomeTemplate: React.FC = () => {
    const handleTest2 = () => {
        handleTest();
    };

    const handleTest = () => {
        console.log('teste');
    };

    useEffect(() => {
        handleTest2();
    });

    return <Header title="Daily Journal" />;
};

export default HomeTemplate;
