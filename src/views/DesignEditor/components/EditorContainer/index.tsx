import React from "react"
import { Block } from "baseui/block"

const EditorContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Block
      $style={{
        width: "750px",
        height: "750px",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        fontFamily: "Uber Move Text",
      }}
    >
      {children}
    </Block>
  )
}

export default EditorContainer
