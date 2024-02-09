import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/index.scss';
import { Layout } from 'antd';
import s from './app.module.scss';
import { MenuApp } from '@components/menu/menuApp.tsx';
import { HeaderApp } from '@components/header/headerApp.tsx';
import { FooterApp } from '@components/footer/footerApp.tsx';

export const App = () => {
    return (
        <Layout className={s.container}>
            <MenuApp />
            <Layout className={s.page}>
                <HeaderApp />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
                <FooterApp />
            </Layout>
        </Layout>
    );
};
