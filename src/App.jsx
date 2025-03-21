import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Navbar } from './navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="d-flex flex-column min-v-100 mt-4">
        <Header></Header>
        
        

        <Footer />
      
      </div>
    </>
  )
}

export default App
