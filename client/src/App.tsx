import { useState } from "react"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/client'
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"

function App() {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0]
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Header selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <main className="p-4">
        <Dashboard date={selectedDate} />
      </main>
    </QueryClientProvider>
  )
}

export default App
