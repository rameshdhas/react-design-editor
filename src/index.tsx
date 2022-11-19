import React from 'react'
import { Canvas as LayerhubCanvas } from "@layerhub-io/react"

// import Navbar from "./views/DesignEditor/components/Navbar"
import Panels from "./views/DesignEditor/components/Panels"
import Canvas from "./views/DesignEditor/components/Canvas"
import Footer from "./views/DesignEditor/components/Footer"
import Toolbox from "./views/DesignEditor/components/Toolbox"
import EditorContainer from "./views/DesignEditor/components/EditorContainer"
import Provider from "./Provider"
import { store } from "./store/store"
export default function HelloWorld(props) {

  return (
          <Provider store={store}>
          <EditorContainer>
          <div style={{ display: "flex", flex: 1 }}>
            <Panels />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Toolbox />
              <Canvas />
              <Footer />
            </div>
          </div>
          </EditorContainer>
          </Provider>
  )
}


