import { Header } from "./components/Header"
import { DayBoard } from "./components/DayBoard"

function App() {
  return (
    <>
      <Header/>
      <main className="p-4">
        <DayBoard />
      </main>
    </>
  )
}

export default App
