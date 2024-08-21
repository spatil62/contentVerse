/*import {StrictMode } from "react"; 
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
);*/


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.js', // Ensure this points to index.js
    },
  },
});*/



