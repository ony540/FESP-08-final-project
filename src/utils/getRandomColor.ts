export const getRandomColor = () => {
  const colorArr = [
    '#04d9ff',
    '#ff9933',
    '#fe4164',
    '#fe019a',
    '#bc13fe',
    '#ff073a',
    '#2C2731',
    '#4E495C',
    '#8C84A8'
  ]
  const randomIndex = Math.floor(Math.random() * colorArr.length)
  return colorArr[randomIndex]
}
