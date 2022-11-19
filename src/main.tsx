import ReactDOM from "react-dom/client"
import Provider from "./Provider"
// import Router from "./Router"
// import Container from "./Container"
import "./styles/styles.css"
// import Dashboard from "~/views/Dashboard"
// import DesignEditor from "~/views/DesignEditor"
import NodeEditor from "~/views/DesignEditor/NodeEditor"
// import {Provider, useDispatch} from 'react-redux';
import { store } from "./store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(


    <Provider store={store}>
      <NodeEditor/>
    </Provider>
)
