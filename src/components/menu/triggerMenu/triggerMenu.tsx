import { createElement } from 'react';
import { TriggerIcon, TriggerMobileIcon } from '@components/menu';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import cl from 'classnames';
import s from './triggerMenu.module.scss';

type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    mobile: boolean;
};

export const TriggerMenu = ({ collapsed, setCollapsed, mobile }: Props) => {
    const wrapperCN = cl({ [s.wrapperMobile]: mobile, [s.wrapper]: !mobile });
    const buttonCN = cl({ [s.buttonMobile]: mobile, [s.button]: !mobile });

    const id = mobile ? 'sider-switch-mobile' : 'sider-switch';

    return (
        <div className={wrapperCN} data-test-id={id}>
            {mobile && <TriggerMobileIcon />}
            {!mobile && <TriggerIcon />}
            <div className={buttonCN}>
                {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    onClick: () => setCollapsed(!collapsed),
                })}
            </div>
        </div>
    );
};
