import React from 'react'

function Button({onClick}) {
  return (
    <div>
        <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">click me</button>
    </div>
  )
}

export default Button