import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('Click the button to get some advice!')
  const [loading, setLoading] = useState(false)

  const fetchAdvice = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      setAdvice(response.data.slip.advice)
    } catch (error) {
      setAdvice('Failed to fetch advice. Please try again.')
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="app">
      <h1>Random Advice Generator</h1>
      <div className="advice-container">
        <p>{advice}</p>
      </div>
      <button onClick={fetchAdvice} disabled={loading}>
        {loading ? 'Loading...' : 'Get Advice'}
      </button>
    </div>
  );
}

export default App
