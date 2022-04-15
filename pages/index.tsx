import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Serch from '../components/search'
import Parts from '../components/parts'
import Iconbutton from '../components/iconButton'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IoAdd } from "react-icons/io5";
import { Shelf } from '../lib/models'
import Shelfs from '../components/shelfs'
import { useRouter } from 'next/router'
import AddShelf from '../components/addShelf'

const Home: NextPage = () => {
  const [parts, setParts] = useState([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    axios.get('http://searchable-shelf.local/api/parts')
      .then(res => {
        setParts(res.data.slice(-3))
      })
  }, [])
  const [shelfList, setShelfList] = useState<Shelf[]>([])
  const updateShelf = () => {
    axios.get('http://searchable-shelf.local/api/shelfs')
      .then(res => {
        setShelfList(res.data)
      })
  }
  const offAllLeds = () => {
    axios.get('http://searchable-shelf.local/api/ports/off')
  }
  useEffect(() => {
    updateShelf()
    offAllLeds()
  }, [])
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>SShelf | トップページ</title>
      </Head>
      <h2 className='mt-5 py-4 font-bold text-2xl'>検索</h2>
      <Serch onChange={setSearchText} onKeyDown={(e) => {
        if (e.key === 'Enter') {
          router.push('/search?name=' + searchText)
        }
      }} />
      <h2 className='mt-5 py-4 font-bold text-2xl'>部品</h2>
      <Link href="/register">
        <a>
          <Iconbutton text='追加' icon={<IoAdd className='mr-1' />} />
        </a>
      </Link>
      <Parts parts={parts} />
      <h2 className='mt-5 py-4 font-bold text-2xl'>引き出し</h2>
      <AddShelf onAdd={(name, port, memo) => {
        axios.post('http://searchable-shelf.local/api/shelfs', {
          name: name,
          port: port,
          memo: memo
        })
          .then(res => {
            updateShelf()
          })
      }}/>
      <Shelfs shelfs={shelfList} />
    </Layout>
  )
}

export default Home
