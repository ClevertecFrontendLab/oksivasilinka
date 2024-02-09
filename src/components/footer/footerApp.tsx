import { Button, Layout, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { CardActions } from '@components/cards/cardActions/cardActions.tsx';
import s from './footerApp.module.scss';

const { Link, Title, Text } = Typography;
const { Footer } = Layout;

export const FooterApp = () => {
    return (
        <Footer className={s.wrapper}>
            <Button className={s.button}>
                <Link className={s.link} href=''>
                    Смотреть отзывы
                </Link>
            </Button>

            <CardActions
                title={
                    <>
                        <Title className={s.title} level={4}>
                            Скачать на телефон
                        </Title>
                        <Text className={s.description}>Доступно в PRO-тарифе</Text>
                    </>
                }
                content={
                    <div className={s.actionsBlock}>
                        <Button className={s.button} icon={<AndroidFilled />} title={'Android OS'}>
                            Android OS
                        </Button>
                        <Button className={s.button} icon={<AppleFilled />} title={'Apple iOS'}>
                            Apple iOS
                        </Button>
                    </div>
                }
            />
        </Footer>
    );
};
