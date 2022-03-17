import Tag from '@features/search/types/Tag'

export const filterTagsByChecked = (tags: Tag[]) => {
  return tags
    .filter(({ label, checked }) => checked && label)
    .map(({ label }) => label)
}
