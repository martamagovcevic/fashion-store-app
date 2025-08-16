import React from 'react'

const Button = ({innerText}) => {
  return (
      <button className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
        {innerText}
        </button>
  )
}

export default Button
