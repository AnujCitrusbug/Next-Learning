export const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle ={
        padding: "100px",
        margin: "10px",
        backgroundColor: "lightgray",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    };
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}