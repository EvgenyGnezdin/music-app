import { Tab } from '../../shared/ui/tab/Tab';
import { tabsData } from './Tabs.prop';
import styled from './tabs.module.scss'

export const Tabs = () => {
    const tabs: tabsData[] = [
        { id: 1, title: 'Все', path: '' },
        { id: 2, title: 'Чарт', path: 'chart'},
        { id: 3, title: 'Жанры', path: 'genres' },
        { id: 4, title: 'Подборки', path: 'compilations' },
        { id: 5, title: 'Актуальное', path: 'current' },
    ];

    
    return (
        <nav className={styled.tabs}>
            <ul>
                {tabs.map((item) => (
                    <Tab key={item.id} titleTab={item.title} pathTab={item.path}/>
                ))}
            </ul>
        </nav>
    );
};

