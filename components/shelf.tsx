import React, { FunctionComponent } from "react";
import { Shelf } from "../lib/models";

interface ShelfProps {
  shelf: Shelf
}

const Shelf: FunctionComponent<ShelfProps> = ({ shelf }) => {

  return (
    <div className="rounded border">
      <div className="px-4 pt-2 pb-1">
        <div className="font-bold">
          {shelf.name}
        </div>
      </div>
      <div className="px-4 py-1">
        <span className="font-semibold text-gray-700 text-sm mr-1">ポート番号</span>
        <span>
          {shelf.port}
        </span>
      </div>
      <div className="px-4 py-1">
        <div className="font-semibold text-gray-700 text-sm">メモ</div>
        <div>
          {shelf.memo}
        </div>
      </div>
      <div className="px-4 pt-1 pb-2">
        <span className="text-sm mr-3">作成日: {shelf.created_at}</span>
      </div>
    </div>
  )
}

export default Shelf