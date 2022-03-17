import Post from '!types/Post'

export const filterPostsByTags = (posts: Post[], filter: string[]) => {
  return [...posts].filter((element) => {
    return filter.every((constraint) => {
      return element.tags.some((tag) => tag === constraint)
    })
  })
}
