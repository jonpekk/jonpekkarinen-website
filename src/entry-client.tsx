import ReactDOM from 'react-dom/client'
import './output.css'
import { StartClient } from '@tanstack/react-router-server/client'
import { createRouter } from './router'

const router = createRouter()

ReactDOM.hydrateRoot(document, <StartClient router={router} />)
