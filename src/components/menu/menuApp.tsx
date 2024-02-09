import { HeartFilled, TrophyFilled } from '@ant-design/icons';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { LogoMain } from '@components/icons/logo/logoMain.tsx';
import s from './menuApp.module.scss';
import { CalendarIcon } from '@components/icons/other/calendarIcon.tsx';
import { ProfileIcon } from '@components/icons/other/profileIcon.tsx';
import { TriggerMenu } from '@components/menu/triggerMenu/triggerMenu.tsx';

const { Sider } = Layout;

export const MenuApp = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        {
            key: '1',
            icon: <CalendarIcon />,
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
    return (
        <Sider
            trigger={null}
            collapsible
            theme={'light'}
            collapsed={collapsed}
            className={s.wrapper}
            width={208}
        >
            <TriggerMenu collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={s.logo}>
                <LogoMain width={'133'} height={'33'} />
            </div>
            <Menu>
                {items.map((item) => (
                    <Menu.Item key={item.key}>
                        <span className={s.icon}>{item.icon}</span>
                        <span>{item.label}</span>
                    </Menu.Item>
                ))}
            </Menu>
            <div>Выход</div>
        </Sider>
    );
};
