import { Outlet } from 'react-router-dom';
import styled from './index.module.scss'
import { Header } from '../../../wigets/header/ui';

export const MainLayout = () => {
    return (
        <div className={styled.mainLayout}>
            <Header/>
            <main>
                {/* <Sidebar/> */}
                <div>Heads</div>
                <Outlet/>
            </main>
        </div>
    );
};

