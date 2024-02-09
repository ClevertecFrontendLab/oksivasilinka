import React, { ReactNode } from 'react';
import { Card } from 'antd';
import s from './cardActions.module.scss';

type Props = {
    content: ReactNode;
    title?: ReactNode;
};
export const CardActions = ({ content, title }: Props) => {
    return (
        <Card className={s.card} title={title}>
            {content}
        </Card>
    );
};
