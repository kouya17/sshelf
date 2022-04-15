import type { NextPage } from 'next'
import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PartDetail from '../components/partDetail'

const Part: NextPage = () => {
  const router = useRouter()
  const { id, name, count, shelf_id, memo, created_at, updated_at } = router.query
  const part = {
    "id": Number(id),
    "count": Number(count),
    "name": String(name),
    "shelf_id": Number(shelf_id),
    "memo": String(memo),
    "created_at": String(created_at),
    "updated_at": String(updated_at)
  }

  return (
    <Layout>
      <Head>
        <title>SShelf | 検索</title>
      </Head>
      <PartDetail part={part} />
    </Layout>
  )
}

export default Part