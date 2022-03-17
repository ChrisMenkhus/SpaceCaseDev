import Tag from '@features/search/types/Tag'

export const isDefaultTag = (tags: Tag[], label: string): boolean => {
  const defaultTags = tags.filter((element) => element.default === true)
  return defaultTags.filter((value) => value.label === label).length > 0
}
