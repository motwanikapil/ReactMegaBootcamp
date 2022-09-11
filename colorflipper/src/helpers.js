import data from './data'

function randomColorGenerator(color) {
  let newColor = data[Math.floor(Math.random() * data.length)]
  if (color === newColor) return randomColorGenerator(color)
  else return newColor
}

export { randomColorGenerator }
