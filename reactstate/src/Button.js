import React from 'react'

function Button() {
  return (
    <button
      onClick={function () {
        alert('I am clicked')
      }}
    >
      Click Me! from Button.js file
    </button>
  )
}

export default Button
