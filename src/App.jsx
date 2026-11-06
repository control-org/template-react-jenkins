import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>React Jenkins Template</h1>
      <p>This project is ready for Jenkins, SonarQube, ESLint and Vitest.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </main>
  )
}

export default App
