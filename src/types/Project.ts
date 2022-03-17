type Project = {
  title: string
  description: string
  stackTags: string[]
  desktopImage: {
    url: string
  }
  mobileImage: {
    url: string
  }
  websiteUrl: string
  githubUrl: string
  colors: string[]
  slug: string
}

export default Project
