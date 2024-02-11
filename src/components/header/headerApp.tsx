import { Navigation } from '../../enums';
import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import cl from 'classnames';
import s from './headerApp.module.scss';

const { Header } = Layout;
const { Title } = Typography;

type Props = {
    mobileApp: boolean;
};

export const HeaderApp = ({ mobileApp }: Props) => {
    const buttonCN = cl({ [s.buttonMobile]: mobileApp, [s.button]: !mobileApp });
    return (
        <Header className={s.wrapper}>
            <Breadcrumb>
                <Breadcrumb.Item href={'/'}>{Navigation.Home}</Breadcrumb.Item>
            </Breadcrumb>
            <Title className={s.title}>
                Приветствуем тебя в&nbsp;CleverFit — приложении,
                <br />
                которое поможет тебе добиться своей мечты!
            </Title>

            <Button
                shape={mobileApp ? 'circle' : undefined}
                className={buttonCN}
                icon={<SettingOutlined />}
                title={'Настройки'}
            >
                {!mobileApp && 'Настройки'}
            </Button>
        </Header>
    );
};
