import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Mensagem from './Mensagem';
import './App.css'

function App() {
    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary">Olá React!</h1>
            <p className="lead text-center">
                Este é o teu primeiro componente React.
            </p>
            {/* Evento onClick em React usa camelCase e chama uma função */}
            <button
                className="btn btn-success d-block mx-auto"
                onClick={() => alert('Olá, Simão!')}
            >
                Clica-me!
            </button>

            <h1 className="text-center">Componentes e Props</h1>
            {/* Cada componente recebe props diferentes */}
            <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
            <Mensagem mytext="Os componentes permitem reutilizar código!" />

        </div>
    );
}

export default App

