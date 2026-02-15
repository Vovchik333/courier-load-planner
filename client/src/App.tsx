import { useState } from "react"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"

function App() {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0]
  })

  return (
    <>
      <Header selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <main className="p-4">
        <Dashboard date={selectedDate} />
      </main>
    </>
  )
}

export default App
