import styled from './index.module.scss'
export const Header = () => {
    return (
        <section className={styled.header}>
            <div className={styled.container}>
                <div className={styled.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="none" stroke="blue" strokeLinecap="round" strokeWidth="1.5" d="M7.97 21.5a4.03 4.03 0 1 0 0-8.06a4.03 4.03 0 0 0 0 8.06ZM12 17.47V2.5m0 0l6.39 1.82a2.303 2.303 0 0 1 1.67 2.21v.968a2.303 2.303 0 0 1-2.878 2.222L12 8.258"></path></svg>
                    <h3>Моя<br/>Музыка</h3>
                </div>
                <div className={styled.bar}>
                    
                </div>

            </div>
        </section>
    );
};

