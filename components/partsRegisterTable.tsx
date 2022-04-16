import React, { FunctionComponent, useState } from "react";
import { Shelf, PartRegisterInfo } from '../lib/models'
import Iconbutton from '../components/iconButton'
import TextArea from '../components/textArea'
import axios from "axios";
import { TailSpin } from  'react-loader-spinner'

interface PartsRegisterTableProps {
  parts: PartRegisterInfo[],
  shelfs: Shelf[],
  onRegist?: () => void
}

const PartsRegisterTable: FunctionComponent<PartsRegisterTableProps> = ({ parts, shelfs, onRegist }) => {
  const [message, setMessage] = useState("")
  const [isPushed, setIsPushed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <div className="mb-5">
        <div className="relative overflow-x-auto sm:rounded-lg border">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  通販コード
                </th>
                <th scope="col" className="px-6 py-3">
                  部品名
                </th>
                <th scope="col" className="px-6 py-3">
                  個数
                </th>
                <th scope="col" className="px-6 py-3">
                  収納場所
                </th>
                <th scope="col" className="px-6 py-3">
                  メモ
                </th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, i) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                    <td className="px-6 py-4">
                      {part.code}
                    </td>
                    <td className="px-6 py-4">
                      {part.name}
                    </td>
                    <td className="px-6 py-4">
                      {part.count}
                    </td>
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                          onChange={(e) => parts[i].shelf_id = Number(e.target.value)}
                        >
                          {shelfs.map((shelf) => {
                            return (
                              <option value={shelf.id} key={shelf.id}>{shelf.name}</option>
                            )
                          })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <TextArea onChange={(e) => parts[i].memo = e.target.value} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        {message}
      </div>
      <div className="flex justify-center" onClick={() => { console.log(parts) }}>
        {!isPushed &&
          <Iconbutton text='登録' onClick={(e) => {
            setIsPushed(true)
            setIsLoading(true)
            setMessage("今回も色々買いましたね。")
            Promise.all(parts.map(async part => await axios.post('http://searchable-shelf.local/api/parts', part)))
              .then(res => {
                setIsLoading(false)
                setMessage("登録に成功しました！")
                if (onRegist) {
                  onRegist()
                }
              })
              .catch(err => {
                setIsLoading(false)
                setMessage("登録に失敗しました。ローカルネットワークにSShelfがありません。")
              })
          }} />
        }
        {isLoading &&
          <TailSpin />
        }
      </div>
    </div>
  )
}

export default PartsRegisterTable