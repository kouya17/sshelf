import React, { FunctionComponent } from "react";

interface IconButtonProps {
  text: string,
  icon?: React.SVGProps<SVGSVGElement>,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton: FunctionComponent<IconButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      {icon}
      <span>{text}</span>
    </button>
  )
}

export default IconButton