import { Button, Card, Layout, Typography } from 'antd';
import React from 'react';
import { TextBlock } from '@components/cards/textBlock/textBlock.tsx';
import { HeartFilled } from '@ant-design/icons';
import s from './main-page.module.scss';
import { CalendarIcon } from '@components/icons/other/calendarIcon.tsx';
import { ProfileIcon } from '@components/icons/other/profileIcon.tsx';

const { Content } = Layout;
const { Title, Text } = Typography;

export const MainPage: React.FC = () => {
    const actions = [
        {
            key: 'action-01',
            title: 'Расписать тренировки',
            titleButton: 'Тренировки',
            icon: <HeartFilled />,
        },
        {
            key: 'action-02',
            title: 'Назначить календарь',
            titleButton: 'Календарь',
            icon: <CalendarIcon />,
        },
        {
            key: 'action-03',
            title: 'Заполнить профиль',
            titleButton: 'Профиль',
            icon: <ProfileIcon />,
        },
    ];
    return (
        <Content className={s.content}>
            <TextBlock
                content={
                    <Text className={s.text}>
                        С CleverFit ты сможешь:
                        <br />
                        — планировать свои тренировки на&nbsp;календаре, выбирая тип и&nbsp;уровень
                        нагрузки;
                        <br />
                        — отслеживать свои достижения в&nbsp;разделе статистики, сравнивая свои
                        результаты с&nbsp;нормами и&nbsp;рекордами;
                        <br />
                        — создавать свой профиль, где ты&nbsp;можешь загружать свои фото, видео
                        и&nbsp;отзывы о&nbsp;тренировках;
                        <br />— выполнять расписанные тренировки для разных частей тела, следуя
                        подробным инструкциям и&nbsp;советам профессиональных тренеров.
                    </Text>
                }
            />
            <TextBlock
                className={s.textBlock}
                content={
                    <Title className={s.title} level={2}>
                        CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире
                        фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Title>
                }
            />
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
        </Content>
    );
};
