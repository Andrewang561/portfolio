import './App.css'
import { motion } from "motion/react"

function App() {

  return (
    <>
      <motion.button 
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1}}
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9}}
        className="introButton">Andrew Wang's Portfolio</motion.button>
    </>
  )
}

export default App
