import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import { IPart } from "../lib/models";

interface PartDetailProps {
  part: IPart
}

const PartDetail: FunctionComponent<PartDetailProps> = ({ part }) => {
  const [port, setPort] = useState<number>(-1)
  const [ledState, setLedState] = useState<'off' | 'on'>('off')

  useEffect(() => {
    const getPort = async () => {
      try {
        const res = await axios.get('http://searchable-shelf.local/api/shelfs/' + part.shelf_id)
        setPort(res.data[0].port)
        await axios.get('http://searchable-shelf.local/api/ports/' + res.data[0].port + '/on')
        setLedState('on')
      } catch (error) {
      }
    }
    getPort()
  }, [])

  useEffect(() => {
    if (port < 0) return
    if (ledState === 'off') {
      setTimeout(() => {
        axios.get('http://searchable-shelf.local/api/ports/' + port + '/on')
        setLedState('on')
      }, 1000)
    } else {
      setTimeout(() => {
        axios.get('http://searchable-shelf.local/api/ports/' + port + '/off')
        setLedState('off')
      }, 1000)
    }
    return
  }, [ledState])

  return (
    <div>
      <div className="my-5">
        <h1 className="font-bold text-2xl">{part.name}</h1>
      </div>
      <div className="my-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">個数: {part.count}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">引き出し: {part.shelf_id}</span>
      </div>
      <div className="my-3">
        <h2>メモ</h2>
        <div>
          {part.memo}
        </div>
      </div>
      <div className="my-3">
        <span className="text-sm mr-3">作成日: {part.created_at}</span>
        <span className="text-sm mx-3">更新日: {part.updated_at}</span>
      </div>
    </div>
  )
}

export default PartDetail