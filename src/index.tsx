import { createRoot } from 'react-dom/client';
import { App } from './App';
import './base.css';

const rootDiv = document.querySelector('#root');
const root = createRoot(rootDiv as HTMLDivElement);

root.render(
    <>
        <App />
    </>
)