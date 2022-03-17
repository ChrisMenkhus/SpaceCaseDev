import Project from '!types/Project'

export const filterProjectsByTitle = (projects: Project[], filter: string) => {
  return projects.filter((element) => {
    if (element.title.toLowerCase().includes(filter.toLowerCase())) {
      return element
    }
  })
}
