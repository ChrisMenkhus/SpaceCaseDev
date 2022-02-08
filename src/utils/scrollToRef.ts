export default function scrollToRef(
  ref: React.MutableRefObject<HTMLDivElement | null>
) {
  ref.current && ref.current.scrollIntoView()
}
