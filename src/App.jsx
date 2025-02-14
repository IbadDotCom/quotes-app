import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Click the button to get an inspirational quote!')
  const [loading, setLoading] = useState(false)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://api.quotable.io/random')
      setQuote(response.data.content)
    } catch (error) {
      setQuote('Failed to fetch a quote. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>Inspirational Quotes</h1>
      <div className="quote-container">
        <p>{quote}</p>
      </div>
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? 'Loading...' : 'Get Quote'}
      </button>
    </div>
  )
}

export default App
