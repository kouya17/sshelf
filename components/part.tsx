import React, { FunctionComponent } from "react";
import { IPart } from "../lib/models"
import Link from 'next/link'

interface PartProps {
  part: IPart;
}

const Part: FunctionComponent<PartProps> = ({ part }) => {

  return (
    <Link href={"/part?id=" + part.id + "&name=" + part.name + "&count=" + part.count
      + "&shelf_id=" + part.shelf_id + "&memo=" + part.memo
      + "&created_at=" + part.created_at + "&updated_at=" + part.updated_at}>
      <a>
        <div className="rounded border hover:bg-gray-100">
          <div className="px-4 pt-2 pb-1">
            <div className="font-bold">
              {part.name}
            </div>
          </div>
          <div className="px-4 py-1">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">個数: {part.count}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">引き出し: {part.shelf_id}</span>
          </div>
          <div className="px-4 py-1">
            <div className="font-semibold text-gray-700 text-sm">メモ</div>
            <div>
              {part.memo}
            </div>
          </div>
          <div className="px-4 pt-1 pb-2">
            <span className="text-sm mr-3">作成日: {part.created_at}</span>
            <span className="text-sm mx-3">更新日: {part.updated_at}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Part