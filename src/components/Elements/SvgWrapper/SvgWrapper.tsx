import makeStyles from '@utils/makeStyles'

type SvgProps = React.SVGProps<SVGSVGElement> & {
  children: JSX.Element[]
}

export function SvgWrapper({ className = '', children }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={makeStyles(['h-14 w-14 transition-all m-auto', className])}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {children}
    </svg>
  )
}
