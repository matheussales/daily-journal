import React from 'react';
import { Divider, PageHeader } from 'antd';
import CurrentDate from '../../molecules/current-date';

interface Header {
    title: string;
}

const Header: React.FC<Header> = ({ title }) => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title={title}
                footer={<CurrentDate />}
            />

            <Divider />
        </>
    );
};

export default Header;
