import s from './textBlock.module.scss';
import { ReactNode } from 'react';

type Props = {
    content: ReactNode;
};

export const TextBlock = ({ content }: Props) => {
    return <div className={s.card}>{content}</div>;
};
