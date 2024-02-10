import { Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import s from './headerApp.module.scss';

const { Header } = Layout;

const { Title, Text } = Typography;

type Props = {
    mobileApp: boolean;
};

export const HeaderApp = ({ mobileApp }: Props) => {
    return (
        <Header className={s.wrapper}>
            <Text className={s.path}>Главная</Text>

            <Title className={s.title}>
                Приветствуем тебя в&nbsp;CleverFit — приложении,
                <br />
                которое поможет тебе добиться своей мечты!
            </Title>

            {!mobileApp && (
                <Button className={s.button} icon={<SettingOutlined />} title={'setting'}>
                    Настройки
                </Button>
            )}
            {mobileApp && (
                <Button
                    shape='circle'
                    className={s.buttonMobile}
                    icon={<SettingOutlined />}
                    title={'setting'}
                />
            )}
        </Header>
    );
};
