import Tag from '!types/Tag'

export const removeTagFromTags = (array: Tag[], string: string) => {
  console.log('removing ' + string + ' from: ', array)
  // const index = array.indexOf(string)

  const index = array.findIndex((object) => {
    return object.label === string
  })

  console.log('index: ', index)

  if (index === -1) return array

  const newArray = [...array]
  newArray.splice(index, 1)

  console.log('removed ' + string)
  return newArray
}
