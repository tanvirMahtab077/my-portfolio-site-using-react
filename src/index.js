import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const container = document.getElementById('root');
const root = createRoot(container);
const app= (
              <React.StrictMode>
                <App />
              </React.StrictMode>
           )
root.render(app);


