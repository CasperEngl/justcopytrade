import { GetStaticProps, GetStaticPaths } from 'next'
import { NotionAPI } from 'notion-client'
import { parsePageId, getAllPagesInSpace } from 'notion-utils'

const notion = new NotionAPI({
  // apiBaseUrl: 'https://api.notion.com',
  authToken: process.env.NOTION_API_SECRET,
})

const pageId = parsePageId('709b444f9a214ec99f7e5c3ee691847f')

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const collection = await notion.fetch({
    headers: {
      Authorization: 'Bearer ',
    },
    endpoint: 'https://api.notion.com/v1/search',
    body: {
      filter: {
        value: 'page',
        property: 'object',
      },
    },
  })

  console.log(collection)

  return {
    paths: [],
    fallback: false,
  }
}

const LegalPage = () => {}
export default LegalPage
