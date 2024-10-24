import Button from "./components/Button"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 bg-green-400">
          <div className="w-[90%] bg-red-300 mx-auto">
              
              <h1 className="text-7xl text-white font-extrabold">Willy Candra</h1>
          </div>
        </section>
    </div>
  )
}

export default App
