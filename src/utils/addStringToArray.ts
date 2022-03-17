export const addStringToArray = (array: string[], string: string): string[] => {
  const newArray: string[] = [...array]
  newArray.push(string)
  return newArray
}
