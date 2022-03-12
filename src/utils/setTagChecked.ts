import Tag from '!types/Tag'

const setTagChecked = (tags: Tag[], target: Tag, checked: boolean) => {
  console.log('MutateTag: ', target)
  const newArray = [...tags]
  const nextArray = newArray.map((tag: Tag) => {
    if (tag.label === target.label) {
      return { ...tag, checked: checked }
    }
    return tag
  })
  return nextArray
}

export default setTagChecked
