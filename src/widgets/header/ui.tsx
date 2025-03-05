import { Button, Input, Logo, Title } from '../../shared/ui';
import styled from './index.module.scss'


export const Header = () => {
    return (
        <header className={styled.header}>
            <div className={styled.logo}>
                <Logo/>
            </div>
            <div className={styled.bar}>
                <Input/>
                <Button children={<Title level={4} children={'Войти'} color={'#fff'}/>}/>
            </div>
        </header>
    );
};

