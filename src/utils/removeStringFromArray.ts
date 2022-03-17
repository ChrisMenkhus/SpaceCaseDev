export const removeStringFromArray = (array: string[], string: string) => {
  console.log('removing ' + string + ' from: ', array)
  const index = array.indexOf(string)
  if (index === -1) return array
  const newArray = [...array]
  newArray.splice(index, 1)
  console.log('removed ' + string)
  return newArray
}
