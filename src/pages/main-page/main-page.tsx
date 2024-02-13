import { Layout, Typography } from 'antd';
import { CardsActions, TextBlock } from '@components/common';
import { CalendarTwoTone, HeartFilled } from '@ant-design/icons';
import { ProfileIcon } from '@components/icons';
import cl from 'classnames';
import s from './main-page.module.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

type Props = {
    collapsed: boolean;
};

export const MainPage = ({ collapsed }: Props) => {
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
            icon: <CalendarTwoTone />,
        },
        {
            key: 'action-03',
            title: 'Заполнить профиль',
            titleButton: 'Профиль',
            icon: <ProfileIcon />,
        },
    ];

    const contentCN = cl(s.content, { [s.contentMobile]: !collapsed });

    return (
        <Content className={contentCN}>
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
            <CardsActions actions={actions} />
        </Content>
    );
};
