import Project from '!types/Project'

export const filterProjectsByTags = (projects: Project[], filter: string[]) => {
  return [...projects].filter((element) => {
    return filter.every((constraint) => {
      return element.stackTags.some((stackTag) => stackTag === constraint)
    })
  })
}
