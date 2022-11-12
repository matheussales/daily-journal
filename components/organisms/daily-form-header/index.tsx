import React from 'react';
import { Divider, PageHeader } from 'antd';
import CurrentDate from '../../molecules/current-date';

const DailyFormHeader: React.FC = () => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Create daily activity"
                footer={<CurrentDate />}
            />

            <Divider />
        </>
    );
};

export default DailyFormHeader;
