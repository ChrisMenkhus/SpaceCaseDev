const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`

async function queryContentful(
  queryItem: 'projects' | 'posts' | 'project' | 'post' | 'slugs',
  slug?: string
): Promise<any> {
  let query: string = ''

  switch (queryItem) {
    case 'projects':
      query = queryForProjects
      break
    case 'project':
      break
    case 'posts':
      query = queryForBlogPosts
      break
    case 'post':
      query = queryForPost(slug!)
      break
    case 'slugs':
      query = queryForSlugs
      break
  }

  const result = await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  if (result.ok) {
    const { data } = await result.json()
    return data
  } else {
    console.error('ERROR: ', result)
    return null
  }
}

const queryForBlogPosts = ` query {
  blogPostCollection{
    items {
      title
      description
      date
      slug
      post {
        json
      }
      image {
        url 
      }
    }
  }
}`

const queryForProjects = ` query {
	projectCollection {
    items {
      title
      description
      slug
      desktopImage {
        url
      }
      mobileImage {
        url
      }
      websiteUrl
      githubUrl
      colors
    }
  }
}`

const queryForSlugs = ` query {
  blogPostCollection{
    items {
      slug
    }
  }
}`

const queryForPost = (slug: string) => ` query {
  blogPostCollection(where: {
    slug: "${slug}"
  },
  limit: 1
  ) {
    items {
      title
      description
      slug
      post {
        json
      }
      date
      image {
        url
      }
    }
  }
}

`

export default queryContentful
