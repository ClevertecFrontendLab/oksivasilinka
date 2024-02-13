import { LogoMain, LogoMobile, LogoSmall } from '@components/icons';
import s from './logo.module.scss';
import cl from 'classnames';

type Props = {
    mobileApp: boolean;
    collapsed: boolean;
};

export const Logo = ({ mobileApp, collapsed }: Props) => {
    const LogoCN = cl({ [s.logoSmall]: collapsed, [s.logo]: !collapsed });
    return (
        <>
            {!mobileApp && (
                <div className={LogoCN}>
                    {collapsed && <LogoSmall width={'28'} height={'26'} />}
                    {!collapsed && <LogoMain width={'133'} height={'33'} />}
                </div>
            )}

            {mobileApp && <div className={s.logoSmallMobile}>{!collapsed && <LogoMobile />}</div>}
        </>
    );
};
