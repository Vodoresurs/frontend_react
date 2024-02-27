// 'use client'

interface ButtonProps {
    text: string;
    action: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({text, action, color}) => {
    
    return (
        <button className="bg-sky-400 text-white px-14 py-4 rounded-md text-lg shadow-lg cursor-pointer overflow-hidden transform hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-out" onClick={action}>{text}</button>
    )
}

export default Button;
