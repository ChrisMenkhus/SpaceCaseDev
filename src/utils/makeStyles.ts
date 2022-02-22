import classNames from 'classnames'
import { overrideTailwindClasses } from 'tailwind-override'

export default function makeStyles(styles: Array<string | boolean>): string {
  return overrideTailwindClasses(classNames(styles)) + ' '
}

//make this function take a variadic prop or a property with multiple inputs
