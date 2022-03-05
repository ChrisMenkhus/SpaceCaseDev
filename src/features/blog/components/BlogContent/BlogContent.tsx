import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types'

export function BlogContent({
  document,
  className = '',
}: {
  document: Document
  className?: string
}) {
  return (
    <div className={className}>
      {documentToReactComponents(document, options)}
    </div>
  )
}

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <div className={styles.paragraph}>{children}</div>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={styles.header}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={styles.header}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className={styles.header}>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className={styles.header}>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className={styles.header}>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className={styles.header}>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className={styles.ul}>{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className={styles.li}>{children}</li>
    ),
  },
  renderMark: {
    [MARKS.CODE]: (text) => <pre className={styles.pre}>{text}</pre>,
  },
}

const styles = {
  paragraph: 'whitespace-pre-wrap leading-relaxed text-lg',
  header: 'my-8 leading-none text-4xl font-medium',
  pre: 'my-0 py-2 px-1 w-full text-white whitespace-pre-wrap bg-dark',
  ul: 'pl-8 list-decimal',
  li: 'list-item indent-2',
}

BlogContent.displayName = 'BlogContentComponent'
