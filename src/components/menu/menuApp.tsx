import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { createElement, useState } from 'react';
import { Layout, Menu } from 'antd';
import { LogoMain } from '@components/icons/logo/logoMain.tsx';
import s from './menuApp.module.scss';

const { Sider } = Layout;

export const MenuApp = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        {
            key: '1',
            icon: <CalendarOutlined />,
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
            icon: <IdcardOutlined />,
            label: 'Профиль',
        },
    ];
    return (
        <Sider
            trigger={<Trigger collapsed={collapsed} setCollapsed={setCollapsed} />}
            collapsible
            theme={'light'}
            collapsed={collapsed}
            className={s.wrapper}
            width={208}
        >
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

type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

const Trigger = ({ collapsed, setCollapsed }: Props) => {
    return (
        <>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                onClick: () => setCollapsed(!collapsed),
            })}
        </>
    );
};
