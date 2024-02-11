import s from './logo.module.scss';
import { LogoMain, LogoMobile, LogoSmall } from '@components/icons';

type Props = {
    mobileApp: boolean;
    collapsed: boolean;
};

export const Logo = ({ mobileApp, collapsed }: Props) => {
    return (
        <>
            {!mobileApp && (
                <div className={collapsed ? `${s.logoSmall}` : `${s.logo}`}>
                    {collapsed && <LogoSmall width={'28'} height={'26'} />}
                    {!collapsed && <LogoMain width={'133'} height={'33'} />}
                </div>
            )}

            {mobileApp && <div className={s.logoSmallMobile}>{!collapsed && <LogoMobile />}</div>}
        </>
    );
};
