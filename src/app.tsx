import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/index.scss';
import { Layout } from 'antd';
import s from './app.module.scss';
import { MenuApp } from '@components/menu';
import { HeaderApp } from '@components/header';
import { FooterApp } from '@components/footer';
import { useEffect, useState } from 'react';

export const App = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    const [collapsed, setCollapsed] = useState(false);

    const mobileApp = width <= breakPoint;

    return (
        <Layout className={s.container}>
            <MenuApp mobileApp={mobileApp} collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className={s.page}>
                <HeaderApp mobileApp={mobileApp} />
                <Routes>
                    <Route path='/' element={<MainPage collapsed={collapsed} />} />
                </Routes>
                <FooterApp />
            </Layout>
        </Layout>
    );
};
