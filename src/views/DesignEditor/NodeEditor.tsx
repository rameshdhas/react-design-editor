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
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Canvas />
          <Footer />
        </div>
        <Panels />
      </div>
    </EditorContainer>
  )
}

export default NodeEditor
