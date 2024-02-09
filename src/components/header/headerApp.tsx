import { Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import s from './headerApp.module.scss';
const { Header } = Layout;

const { Title, Text } = Typography;

export const HeaderApp = () => {
    return (
        <Header className={s.wrapper}>
            <Text className={s.path}>Главная</Text>

            <Title className={s.title}>
                Приветствуем тебя в CleverFit — приложении,
                <br />
                которое поможет тебе добиться своей мечты!
            </Title>

            <Button className={s.button} icon={<SettingOutlined />} title={'setting'}>
                Настройки
            </Button>
        </Header>
    );
};
