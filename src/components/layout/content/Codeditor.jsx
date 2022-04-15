import React from 'react'
import Editor from "@monaco-editor/react";
import '../../../css/Editor.css'

export default function CodeEditor() {
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }
  return (
    <div>
      <div className="resizable">
        <Editor
          height="70vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onChange={handleEditorChange}
        />
      </div>
      {/* <div className="d-flex">
          
      </div> */}
    </div>
  )
}