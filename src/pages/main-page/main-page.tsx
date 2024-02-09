import { Button, Layout, Typography } from 'antd';
import React from 'react';
import { TextBlock } from '@components/cards/textBlock/textBlock.tsx';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { CardActions } from '@components/cards/cardActions/cardActions.tsx';
import s from './main-page.module.scss';

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
            icon: <CalendarOutlined />,
        },
        {
            key: 'action-03',
            title: 'Заполнить профиль',
            titleButton: 'Профиль',
            icon: <IdcardOutlined />,
        },
    ];
    return (
        <Content className={s.content}>
            <TextBlock
                content={
                    <Text className={s.text}>
                        С CleverFit ты сможешь:
                        <br />
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                        <br />
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                        <br />
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;
                        <br />— выполнять расписанные тренировки для разных частей тела, следуя
                        подробным инструкциям и советам профессиональных тренеров.
                    </Text>
                }
            />
            <TextBlock
                className={s.textBlock}
                content={
                    <Title className={s.title} level={2}>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Title>
                }
            />
            <div className={s.cardsActions}>
                {actions.map((card) => (
                    <CardActions
                        key={card.key}
                        title={
                            <Title className={s.titleCard} level={4}>
                                {card.title}
                            </Title>
                        }
                        content={
                            <div className={s.contentCard}>
                                <Button
                                    className={s.button}
                                    icon={card.icon}
                                    title={card.titleButton}
                                >
                                    {card.titleButton}
                                </Button>
                            </div>
                        }
                    />
                ))}
            </div>
        </Content>
    );
};
