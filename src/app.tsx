import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import 'normalize.css';
import './styles/index.scss';
import { Layout } from 'antd';
import s from './app.module.scss';
import { MenuApp } from '@components/menu/menuApp.tsx';

const { Header, Footer } = Layout;

export const App = () => {
    return (
        <Layout className={s.container}>
            <MenuApp />
            <Layout className={s.page}>
                <Header>header</Header>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
                <Footer>footer</Footer>
            </Layout>
        </Layout>
    );
};
