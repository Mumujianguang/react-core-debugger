import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './src'

const rootDom = document.getElementById('root');
const root = createRoot(rootDom);

const mount = () => {
    const callback = () => {
        console.log('mounted')
    }

    root.render(<App callback={callback} />);
}

const render = () => {
    root.render(<App />);
}

window.__mount__ = mount;
window.__render__ = render;