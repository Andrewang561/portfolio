import './App.css'
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="introButtonContainer">
        <motion.button 
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1}}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9}}
          className="introButton"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}>
            Andrew Wang's Portfolio
        </motion.button>
      </div>
      <AnimatePresence>
          {isHovered && (
            <motion.div
              className="hoverMessageIntro"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}>
                Click Me!
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}

export default App
