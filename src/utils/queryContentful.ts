async function queryContentful(query: string): Promise<any> {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  )
  if (result.ok) {
    // console.log('RESULT: ', result)
    const { data } = await result.json()
    return data
  } else {
    console.error('ERROR: ', result)
    return null
  }
}

export default queryContentful
