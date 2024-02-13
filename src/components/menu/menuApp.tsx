import { Button, Layout, Menu } from 'antd';
import { Logo, TriggerMenu } from '@components/menu';
import { ExitIcon, ProfileIcon } from '@components/icons';
import { CalendarTwoTone, HeartFilled, TrophyFilled } from '@ant-design/icons';
import cl from 'classnames';
import s from './menuApp.module.scss';

const { Sider } = Layout;

type Props = {
    mobileApp: boolean;
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};
export const MenuApp = ({ mobileApp, collapsed, setCollapsed }: Props) => {
    const items = [
        {
            key: '1',
            icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <TrophyFilled />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: <ProfileIcon />,
            label: 'Профиль',
        },
    ];
    const wrapperCN = cl({ [s.wrapperMobile]: mobileApp, [s.wrapper]: !mobileApp });

    return (
        <Sider
            trigger={null}
            collapsible
            theme={'light'}
            collapsed={collapsed}
            className={wrapperCN}
            width={mobileApp ? 106 : 208}
            collapsedWidth={mobileApp ? 1 : 64}
        >
            <TriggerMenu mobile={mobileApp} collapsed={collapsed} setCollapsed={setCollapsed} />
            <Logo mobileApp={mobileApp} collapsed={collapsed} />

            <Menu>
                {items.map((item) => (
                    <Menu.Item key={item.key}>
                        {!mobileApp && <span className={s.icon}>{item.icon}</span>}
                        {!collapsed && <span className={s.label}>{item.label}</span>}
                    </Menu.Item>
                ))}
            </Menu>

            <Button icon={!mobileApp && <ExitIcon />} title={'Выход'} className={s.button}>
                {!collapsed && 'Выход'}
            </Button>
        </Sider>
    );
};
