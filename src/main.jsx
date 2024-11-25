import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// after install import react router dom here 
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    //  after import here wrap  here BrowserRouter inside
    // then make separete folder in src  name routes  pass all routes 
    <BrowserRouter>
            <App />

    </BrowserRouter>
  

)
