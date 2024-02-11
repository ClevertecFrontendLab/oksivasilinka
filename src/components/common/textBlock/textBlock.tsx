import s from './textBlock.module.scss';
import { ReactNode } from 'react';

type Props = {
    content: ReactNode;
    className?: string;
};

export const TextBlock = ({ content, className }: Props) => {
    return <div className={`${s.card} ${className}`}>{content}</div>;
};
