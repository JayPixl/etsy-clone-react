import { useEffect, useState } from 'react'

export default function App() {

  const [message, setMessage] = useState("")

  const api_base = process.env.NODE_ENV === "production" ? "/api" : "http://127.0.0.1:3001/api"

  useEffect(() => {
    fetch(api_base)
      .then(res => res.json())
      .then((data: any) => data?.message ? setMessage(data.message) : setMessage("ERROR"))
      .catch(() => setMessage("ERROR"))
  }, [])

  return <div>
    Message from API: {message}
  </div>
}
