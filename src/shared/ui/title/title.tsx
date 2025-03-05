import { title } from "./title.props";

export const Title = ({level, children, fontSize, fontWeight, backgroundColor='transparent', color, className}:title) => {
    const Tag = `h${level}`as keyof JSX.IntrinsicElements;

    const style = {
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`
    }

    return (
        <Tag className={className} style={style}>
            {children}
        </Tag>
    );
};

