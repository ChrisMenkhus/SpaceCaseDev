import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types'

function BlogContent({ document }: { document: Document }) {
  return (
    <div className="w-full">{documentToReactComponents(document, options)}</div>
  )
}

const options: Options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre className="py-2 px-4 my-4 text-white whitespace-pre-wrap bg-dark">
        {text}
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="mt-8 mb-4 text-4xl font-medium">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="my-4 text-5xl text-primary">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item mb-4 ml-4">{children}</li>
    ),
  },
}

export default BlogContent
