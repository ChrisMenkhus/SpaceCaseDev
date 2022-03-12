import setTagChecked from './setTagChecked'

import Tag from '!types/Tag'

const addNewTag = (tags: Tag[], newTag: Tag) => {
  const nextArray = [...tags]
  nextArray.push(newTag)

  const alreadyExists =
    [...tags].filter((tag: Tag) => {
      if (tag.label.toLowerCase() === newTag.label.toLowerCase()) {
        return tag
      }
    }).length > 0

  console.log('alreadyExists: ', alreadyExists)

  if (alreadyExists) {
    return setTagChecked(tags, newTag, true)
  } else return nextArray
}

export default addNewTag
