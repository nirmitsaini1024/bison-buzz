import React from 'react'

const Button = ({text, textColor, bg}:any) => {
  // Create a style object instead of using Tailwind classes for dynamic colors
  const buttonStyle = {
    backgroundColor: bg,
    color: textColor
  }

  return (
    <button 
      className="p-8 py-3 rounded-md font-medium shadow-xl h-fit w-fit"
      style={buttonStyle}
    >
      {text}
    </button>
  )
}

export default Button