import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import TextArea from '../components/textArea'
import PartsRegisterTable from '../components/partsRegisterTable'
import { useEffect, useState } from 'react'
import { convertPartsTextToPartInfoList } from '../lib/partRegister'
import { Shelf, PartRegisterInfo } from '../lib/models'
import axios from 'axios'
import { demoShelfs } from '../lib/demo'

const Register: NextPage = () => {
  const [partInfoList, setPartInfoList] = useState<PartRegisterInfo[]>([])
  const [shelfList, setShelfList] = useState<Shelf[]>([])
  useEffect(() => {
    console.log("effect")
    axios.get('http://searchable-shelf.local/api/shelfs')
      .then(res => {
        setShelfList(res.data)
      })
      .catch(error => {
        setShelfList(demoShelfs)
      })
  }, [])

  return (
    <Layout>
      <Head>
        <title>SShelf | 部品追加ページ</title>
      </Head>
      <h2 className='mt-5 py-4 font-bold text-2xl'>部品登録</h2>
      <div>部品一覧を購入履歴からコピペしてください。</div>
      <div className='my-3'>
        <TextArea rows={10} placeholder={'今回はどれだけ買いましたか？'} onChange={(event) => {
          const partInfoList = convertPartsTextToPartInfoList(event.target.value)
          partInfoList.map((partInfo) => partInfo.shelf_id = shelfList[0].id)
          setPartInfoList(partInfoList)
        }} />
      </div>
      <h2 className='mt-5 py-4 font-bold text-2xl'>一覧表</h2>
      <div className='mb-5'>
        <PartsRegisterTable parts={partInfoList} shelfs={shelfList} />
      </div>
    </Layout>
  )
}

export default Register
