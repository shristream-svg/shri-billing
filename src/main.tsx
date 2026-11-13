import React from 'react';
import {createRoot} from 'react-dom/client';
import OriginalApp from './original/OriginalApp';
import './original/original.css';
import './original/integration.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><OriginalApp/></React.StrictMode>);
