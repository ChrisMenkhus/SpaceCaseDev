const truncateString = (
  str: string,
  limit: number,
  noDots?: boolean
): string => {
  if (str === undefined) return str
  if (str.length <= limit) {
    return str
  } else {
    str = str.substring(0, limit)
    return str + (noDots ? '' : '...')
  }
}

export default truncateString
