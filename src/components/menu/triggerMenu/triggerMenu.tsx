import { createElement } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import s from './triggerMenu.module.scss';
import { TriggerMobileIcon } from '@components/menu/triggerMenu/trigerIcon/triggerMobileIcon.tsx';
import { TriggerIcon } from '@components/menu/triggerMenu/trigerIcon/triggerIcon.tsx';

type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    type?: 'desktop' | 'mobile';
};

export const TriggerMenu = ({ collapsed, setCollapsed, type = 'desktop' }: Props) => {
    const mobile = type === 'mobile';
    const wrapperStyle = mobile ? `${s.wrapperMobile}` : `${s.wrapper}`;
    const buttonStyle = mobile ? `${s.buttonMobile}` : `${s.button}`;

    const id = mobile ? 'sider-switch-mobile' : 'sider-switch';

    return (
        <div className={wrapperStyle} data-test-id={id}>
            {mobile && <TriggerMobileIcon />}
            {!mobile && <TriggerIcon />}
            <div className={buttonStyle}>
                {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
        </div>
    );
};
