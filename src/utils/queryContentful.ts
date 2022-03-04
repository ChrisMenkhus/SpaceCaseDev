const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`

export async function queryForPosts(limit?: number) {
  return queryContentful(` query {
    blogPostCollection (limit: ${limit || 99}) {
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
  }`)
}

export async function queryForProjects(limit?: number) {
  return queryContentful(` query {
    projectCollection (limit: ${limit || 99}) {
      items {
        title
        description
        stackTags
        desktopImage {
          url
        }
        mobileImage {
          url
        }
        websiteUrl
        githubUrl
        colors
        slug
      }
    }
  }`)
}

export async function queryForSlugs(limit?: number) {
  return queryContentful(` query {
    blogPostCollection{
      items {
        slug
      }
    }
  }`)
}

export async function queryForPost(slug?: string) {
  return queryContentful(`query {
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
  }`)
}

async function queryContentful(query: string): Promise<any> {
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

export default queryContentful
