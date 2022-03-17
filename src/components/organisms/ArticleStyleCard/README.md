usage:

<SearchComponentsContainer>
                {projects.map((element, i) => {
                  return (
                    <ArticleStyleCard
                      cardType="Project"
                      {...element}
                      key={element.title + i}
                      imgSrc={element.desktopImage.url}
                      linkPaths={[
                        { path: element.websiteUrl, label: 'Website' },
                        { path: element.githubUrl, label: 'GitHub' },
                      ]}
                      tags={element.stackTags}
                      tagsCallback={
                        (label: string) => {}
                        // mutateSearchTags('create', {
                        //   label: label,
                        //   checked: true,
                        //   default: false,
                        // })
                      }
                    />
                  )
                })}
              </SearchComponentsContainer>
