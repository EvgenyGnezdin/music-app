import { Link, useLocation } from 'react-router-dom';
import { Title } from '../../shared/ui/title/title';
import styled from './sidebar.module.scss';


export const Sidebar = () => {
    const location = useLocation()

    return (
        <aside className={styled.sidebar}>
            <nav>
                <ul>
                    <Link to='/' className={styled.li}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16" className={location.pathname.slice(1) !== 'favorites' ? styled.activeIcon : styled.iconLink}>
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"></path>
                        </svg> 
                        <Title level={4} fontSize={16} fontWeight={400} children={"Главная"} className={location.pathname.slice(1) !== 'favorites' ? styled.activeTitle : styled.titleLink}/>
                    </Link>
                    <Link to='favorites' className={styled.li}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024" className={location.pathname.slice(1) == 'favorites' ? styled.activeIcon : styled.iconLink}>
                            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9M512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3"/>
                        </svg>
                        <Title level={4} fontSize={16} fontWeight={400} children={"Избранное"} className={location.pathname.slice(1) == 'favorites' ? styled.activeTitle : styled.titleLink}/>
                    </Link>
                </ul>
            </nav>
        </aside>
    );
};

