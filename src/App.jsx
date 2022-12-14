import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1 className="underline text-7xl font-semibold text-red-600 bg-orange-200">
                Vite + React + eslint + prettier
            </h1>
            <div className="card">
                <button type="button" onClick={() => setCount((countValue) => countValue + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
