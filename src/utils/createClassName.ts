export default function createClassName(names: (string | null)[]): string {
  const reducer = (previousValue: string, currentValue: string) =>
    previousValue + ' ' + currentValue

  let onlyNames: string[] = names.filter((e): e is string => {
    return e !== null
  })

  return onlyNames.reduce(reducer)
}

createClassName
