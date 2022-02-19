export type Post = {
  title: string
  description: string
  date: string
  post: { json: JSON }
  slug: string
  image: {
    url: string
  }
}

export default Post
