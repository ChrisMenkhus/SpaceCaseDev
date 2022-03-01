const truncateString = (str: string, limit: number): string => {
  if (limit > str.length) {
    return str
  } else {
    str = str.substring(0, limit)
    return str + '...'
  }
}

export default truncateString
