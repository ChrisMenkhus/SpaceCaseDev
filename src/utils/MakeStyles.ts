import classNames from 'classnames'
import { overrideTailwindClasses } from 'tailwind-override'

export default function MakeStyles(styles: Array<string | boolean>): string {
  return overrideTailwindClasses(classNames(styles))
}
