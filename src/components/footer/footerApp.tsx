import { Button, Card, Layout, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import s from './footerApp.module.scss';

const { Link, Title, Text } = Typography;
const { Footer } = Layout;

export const FooterApp = () => {
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
                    <Button className={s.button} icon={<AndroidFilled />} title={'Android OS'}>
                        Android OS
                    </Button>
                    <Button className={s.button} icon={<AppleFilled />} title={'Apple iOS'}>
                        Apple iOS
                    </Button>
                </div>
            </Card>
        </Footer>
    );
};
