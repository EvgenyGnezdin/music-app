import sprites from '../../../assets/sprites.svg';
import { icon } from "./icon.props";


export const Icon: React.FC<icon> = ({src, alt='', width, height, isSvg=false, className, color='#000' }) => {
    console.log(`${sprites}#${src}`);
    
    if(isSvg) {
        return (
            <svg className={className}
                width={width}
                height={height}
                fill={color}>
                <use href={`${sprites}#${src}`}></use>
            </svg>
        );
    }
    return (
        <img src={src} alt={alt} width={width} height={height} className={className}/>
    )
};

