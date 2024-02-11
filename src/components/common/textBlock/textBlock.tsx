import { ReactNode } from 'react';
import s from './textBlock.module.scss';

type Props = {
    content: ReactNode;
    className?: string;
};

export const TextBlock = ({ content, className }: Props) => (
    <div className={`${s.card} ${className}`}>{content}</div>
);
