import Navbar from "./components/Navbar"
import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
import Footer from "./components/Footer"
import Toolbox from "./components/Toolbox"
import EditorContainer from "./components/EditorContainer"

const NodeEditor = () => {
  return (
    <EditorContainer>
      <div style={{ display: "flex", flex: 1 }}>
         <Canvas />
         <Panels />
      </div>
    </EditorContainer>
  )
}

export default NodeEditor
