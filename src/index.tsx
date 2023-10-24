import { createRoot } from 'react-dom/client';
import { App } from './App';
import { StrictMode } from "react";

const rootDiv = document.querySelector('#root');
const root = createRoot(rootDiv as HTMLDivElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)