import {StrictMode } from "react"; 
import ReactDOM from "react-router-dom" 
import App from "./App" 
import {BrowserRouter} from "react-router-dom" 
const rootElement = document.getElementById("root") 
ReactDOM.render( 
<StrictMode> 
    <BrowserRouter> 
      <App /> 
   </BrowserRouter> 
</StrictMode>, 
  rootElement 
);