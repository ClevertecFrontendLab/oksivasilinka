import { createElement } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import s from './triggerMenu.module.scss';

type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

export const TriggerMenu = ({ collapsed, setCollapsed }: Props) => {
    return (
        <div className={s.wrapper} data-test-id='sider-switch'>
            <div className={s.button}>
                {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
            <div className={s.shadow} />
        </div>
    );
};
