import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import SearchComponent from '../components/search'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Parts from '../components/parts'

const Search: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  const [parts, setaParts] = useState([])
  useEffect(() => {
    axios.get('http://searchable-shelf.local/api/parts?name='+name)
      .then(res => {
        setaParts(res.data)
      })
  }, [])

  return (
    <Layout>
      <Head>
        <title>SShelf | 検索</title>
      </Head>
      <h1 className='mt-5 py-4 font-bold text-2xl'>検索</h1>
      <div className='mb-5'>
        <SearchComponent placeholder={String(name)} />
      </div>
      <div className='my-5'>
        <Parts parts={parts} />
      </div>
    </Layout>
  )
}

export default Search
