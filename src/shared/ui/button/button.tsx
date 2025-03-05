import styles from './button.module.scss';
import { button } from './button.props';


export const Button = ({children}:button) => {
    // const style = {
    //     width: `${width}px`,
    //     height: `${height}px`,
    //     color: `${color}`,
    //     backgroundColor: `${backgroundColor}`,
    //     borderRadius: `${borderRadius}`
    // }
    return (
        <figure className={styles.button}>
            <button >{children}</button>
        </figure>
    );
};

Button.defaultProps = {
    children: "Войти"
};

