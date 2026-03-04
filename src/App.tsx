import './App.css'
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <motion.div className="portfolio" animate={{ opacity: !isClicked ? 0.2 : 1}}>
        text text text</motion.div>
      <div className="introButtonContainer">
        {!isClicked ? (<motion.button 
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1}}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9}}
          className="introButton"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          >
            Andrew Wang's Portfolio
        </motion.button>) : null}
      </div>
      <AnimatePresence>
          {!isClicked && isHovered && (
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
