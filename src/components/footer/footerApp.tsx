import { Button, Card, Layout, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import s from './footerApp.module.scss';

const { Link, Title, Text } = Typography;
const { Footer } = Layout;

export const FooterApp = () => {
    const cardButtons = [
        { key: 'btn-01', icon: <AndroidFilled />, title: 'Android OS' },
        { key: 'btn-02', icon: <AppleFilled />, title: 'Apple iOS' },
    ];

    return (
        <Footer className={s.wrapper}>
            <Button className={s.buttonLink}>
                <Link className={s.link} href=''>
                    Смотреть отзывы
                </Link>
            </Button>

            <Card
                className={s.card}
                title={
                    <>
                        <Title className={s.title} level={4}>
                            Скачать на телефон
                        </Title>
                        <Text className={s.description}>Доступно в PRO-тарифе</Text>
                    </>
                }
            >
                <div className={s.actionsBlock}>
                    {cardButtons.map((item) => (
                        <Button
                            key={item.key}
                            className={s.button}
                            icon={item.icon}
                            title={item.title}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </Card>
        </Footer>
    );
};
