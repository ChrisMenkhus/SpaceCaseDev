const truncateString = (str: String, limit: number): String => {
  if (limit > str.length) {
    return str
  } else {
    str = String(str).substring(0, limit)
    return str + '...'
  }
}

export default truncateString
