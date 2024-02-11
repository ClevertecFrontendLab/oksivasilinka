import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import s from './headerApp.module.scss';

const { Header } = Layout;
const { Title } = Typography;

type Props = {
    mobileApp: boolean;
};

export const HeaderApp = ({ mobileApp }: Props) => {
    return (
        <Header className={s.wrapper}>
            <Breadcrumb>
                <Breadcrumb.Item href={'/'}>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <Title className={s.title}>
                Приветствуем тебя в&nbsp;CleverFit — приложении,
                <br />
                которое поможет тебе добиться своей мечты!
            </Title>

            <Button
                shape={mobileApp ? 'circle' : undefined}
                className={mobileApp ? `${s.buttonMobile}` : `${s.button}`}
                icon={<SettingOutlined />}
                title={'Настройки'}
            >
                {!mobileApp && 'Настройки'}
            </Button>
        </Header>
    );
};
