import React, { FunctionComponent } from "react";
import { Shelf } from "../lib/models";
import ShelfComponent from "./shelf";

interface ShelfsProps {
  shelfs: Shelf[];
}

const Shelfs: FunctionComponent<ShelfsProps> = ({ shelfs }) => {

  return (
    <div className="grid grid-cols-3">
      {shelfs.map((shelf) => {
        return (
          <div className="m-3" key={shelf.id}>
            <ShelfComponent shelf={shelf} />
          </div>
        )
      })}
    </div>
  )
}

export default Shelfs