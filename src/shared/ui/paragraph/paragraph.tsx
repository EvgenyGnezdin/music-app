import { paragraph } from "./paragraph.props";

export const Paragraph = ({children, fontSize, fontWeight, color, backgroundColor='transparent', className}:paragraph) => {

    const style = {
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`
    }

    return (
        <p className={className} style={style}>
            {children} 
        </p>
    );
};

