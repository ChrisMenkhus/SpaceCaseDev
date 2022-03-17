import Post from '!types/Post'

export const filterPostsByTitle = (posts: Post[], filter: string) => {
  return posts.filter((element) => {
    if (element.title.toLowerCase().includes(filter.toLowerCase())) {
      return element
    }
  })
}
