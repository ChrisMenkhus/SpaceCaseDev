async function queryContentful(query: string) {
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
  // console.log('RESULT: ', result)
  if (result.ok) {
    return await result.json()
  } else {
    console.error('ERROR: ', result)
    return {}
  }
}

export default queryContentful
