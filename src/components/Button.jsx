import React from 'react'

const Button = ({innerText, onClick, className}) => {
  return (
      <button onClick={onClick}  className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition ${className}`}>
        {innerText}
        </button>
  )
}

export default Button
