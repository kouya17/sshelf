import React, { FunctionComponent } from "react";
import Part from './part'
import { IPart } from '../lib/models'

interface PartsProps {
  parts: IPart[];
}

const Parts: FunctionComponent<PartsProps> = ({ parts }) => {

  return (
    <div className="grid grid-cols-3">
      {parts.map((part) => {
        return (
          <div className="m-3" key={part.id}>
            <Part part={part} />
          </div>
        )
      })}
    </div>
  )
}

export default Parts