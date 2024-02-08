import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import 'normalize.css';
import './styles/index.scss';

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
};
