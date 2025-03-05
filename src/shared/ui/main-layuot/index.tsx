import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header/ui';
import { Sidebar } from '../../../entities/sidebar/Sidebar';
import { Tabs } from '../../../entities/tabs/Tabs';
import styled from './index.module.scss'

export const MainLayout = () => {

    
    return (
        <div className={styled.mainLayout}>
            <Header/>
            <Sidebar/>
            <Tabs/>
            <main className={styled.main}>
                <Outlet/>
            </main>

            <footer style={{gridArea: "footer"}}>Footer</footer>
        </div>
    );
};

