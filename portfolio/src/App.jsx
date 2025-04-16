import React, { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar';
import "./index.css"

function App() {
  const[isLoaded, setIsLoaded] = useState(false);

  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
     <div
        className={`min-h-screen transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >  
      <Navbar/>
      </div>
    </>
  )
}

export default App