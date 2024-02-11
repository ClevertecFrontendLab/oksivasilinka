import { ReactNode } from 'react';
import s from './cardsActions.module.scss';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

type Actions = {
    key: string;
    title: string;
    titleButton: string;
    icon: ReactNode;
};

type Props = {
    actions: Actions[];
};

export const CardsActions = ({ actions }: Props) => {
    return (
        <div className={s.cardsActions}>
            {actions.map((card) => (
                <Card
                    className={s.card}
                    key={card.key}
                    title={
                        <Title className={s.titleCard} level={4}>
                            {card.title}
                        </Title>
                    }
                >
                    <div className={s.contentCard}>
                        <Button className={s.button} icon={card.icon} title={card.titleButton}>
                            {card.titleButton}
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};
