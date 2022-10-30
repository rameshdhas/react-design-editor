import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import Dashboard from "~/views/Dashboard"
import DesignEditor from "~/views/DesignEditor"
import NodeEditor from "~/views/DesignEditor/NodeEditor"

ReactDOM.createRoot(document.getElementById("root")!).render(



  <Provider>
    <Container>
      <NodeEditor/>
    </Container>
  </Provider>

)
