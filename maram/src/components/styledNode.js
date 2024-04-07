import React from "react";
import { Handle, Position } from 'reactflow';

export default function StyledNode({name}){
    return(
      <>
        {/* <Handle type="target" position={Position.Top} isConnectable={true} /> */}
        <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={name}
        />
        </div>
        <Handle type="source" position={Position.Bottom} id="b" isConnectable={true} />
      </>
    )
}