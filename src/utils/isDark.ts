const isDark = (color: string) => {
  const c = color.substring(1) // strip #
  var rgb = parseInt(c, 16)
  var r = (rgb >> 16) & 0xff
  var g = (rgb >> 8) & 0xff
  var b = (rgb >> 0) & 0xff

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  if (luma < 40) {
    return true
  } else return false
}

export default isDark
