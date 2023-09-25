
export const randomElement = (arr) => {
  const randonNumber = Math.floor(Math.random() * arr.length)
  return arr[randonNumber]
}
