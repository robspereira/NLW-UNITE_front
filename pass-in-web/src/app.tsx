import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

export function App() {

  return (
    <div className="max-w-[1216px] mx-auto">
      <Header />
      <AttendeeList />
  
    </div>
  )
   
}

export default App
