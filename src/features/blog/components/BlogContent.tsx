import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import {
  BLOCKS,
  Document,
  EntryLinkBlock,
  MARKS,
} from '@contentful/rich-text-types'

function BlogContent({
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
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node.data.target)
      return <div className="">{children}</div>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <div className="">{children}</div>,
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
      <ul className="pl-8 list-decimal">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item indent-2">{children}</li>
    ),
  },
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre className="py-2 px-1 my-2 w-full text-white whitespace-pre-wrap bg-dark">
        {text}
      </pre>
    ),
  },
}

const styles = {
  header: 'pt-8 pb-2 text-4xl font-medium',
}

export default BlogContent
