import React from 'react'
import Console from './Console'
import CodeEditor from './content/Codeditor'
import Sidesection from './content/Sidesection'

export default function Content() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="w-75">
          <CodeEditor />
          <Console />
        </div>
        <div className="w-25">
          <Sidesection />
        </div>
      </div>
    </>
  )
}