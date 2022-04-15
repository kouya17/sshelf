import React, { FunctionComponent, useState } from "react";
import IconButton from "./iconButton";
import { IoAdd } from "react-icons/io5";

interface AddShelfProps {
  onAdd: (name: string, port: number, memo: string) => void
}

const AddShelf: FunctionComponent<AddShelfProps> = ({ onAdd }) => {
  const [name, setName] = useState("")
  const [port, setPort] = useState(0)
  const [memo, setMemo] = useState("")

  return (
    <div className="flex border rounded p-4 w-fit">
      <IconButton
        text={"追加"}
        icon={<IoAdd className='mr-1' />}
        onClick={(e) => {
          onAdd(name, port, memo)
        }}
      />
      <div className="flex-col">
        <div className="m-3">
          <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            名前
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="part-name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="m-3">
          <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            接続ポート番号
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="part-port"
            type="number"
            onChange={(e) => setPort(Number(e.target.value))}
          ></input>
        </div>
        <div className="m-3">
          <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            メモ
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="part-memo"
            type="text"
            onChange={(e) => setMemo(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default AddShelf