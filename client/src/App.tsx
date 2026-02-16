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
      <div className="flex flex-col h-screen">
        <Header selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <main className="flex-1 p-4 overflow-hidden">
          <Dashboard date={selectedDate} />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
