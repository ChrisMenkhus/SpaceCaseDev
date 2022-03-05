const truncateString = (str: string, limit: number): string => {
  if (str.length <= limit) {
    return str
  } else {
    str = str.substring(0, limit)
    return str + '...'
  }
}

export default truncateString
