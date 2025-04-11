import React from 'react';

interface ButtonProps {
  text: string;
  textColor: string;
  bg: string;
}

const Button: React.FC<ButtonProps> = ({ text, textColor, bg }) => {
  const buttonStyle = {
    backgroundColor: bg,
    color: textColor,
  };

  return (
    <button
      className="p-8 py-3 rounded-md font-medium shadow-xl h-fit w-fit"
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default Button;
