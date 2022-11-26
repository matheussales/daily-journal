import { useState } from 'react';
import { Row, Typography, Col } from 'antd';
import { DAYS, MONTHS } from '../../../lib/constants';

import styles from './styles.module.scss';

const { Title, Text } = Typography;

interface CurrentDateProps {
    date?: Date;
}

const CurrentDate: React.FC<CurrentDateProps> = ({
    date = new Date(),
}: CurrentDateProps) => {
    const [currentDate] = useState(date);

    return (
        <Row gutter={[16, 16]}>
            <Col>
                <Title className={styles.title}>{currentDate.getDate()}</Title>
            </Col>

            <Col>
                <Text>{DAYS[currentDate.getDay()]}</Text>
                <Row gutter={[8, 8]}>
                    <Col>
                        <Text>
                            {MONTHS[currentDate.getMonth()].substring(0, 3)}
                        </Text>
                    </Col>
                    <Col>
                        <Text>{currentDate.getFullYear()}</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default CurrentDate;
