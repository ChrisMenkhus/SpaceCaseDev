export type Project = {
  title: string
  description: string
  slug: string
  desktopImage: {
    url: string
  }
  mobileImage: {
    url: string
  }
  websiteUrl: string
  githubUrl: string
  colors: string[]
}

export default Project
