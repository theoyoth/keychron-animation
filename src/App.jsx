// import libraries
import {useState} from 'react'
import {motion} from 'framer-motion'
// import files
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  const keyboardNameMain = {
    init:{
      y:440,
      fontSize:"5rem",
    },
    visible:{
      y:440,
      fontSize:"5.2rem",
      transition:{ 
        ease: [0.25, 0.4, 0.25, 1],
        duration: 1.2
      }
    }
  }

  const section = {
    init:{
      opacity:1,
    },
    visible:{
      opacity:1,
    }
  }

  const keyboardImage = {
    init:{
      scale:0,
    },
    visible:{
      scale:1,
      transition:{
        delay:1,
        duration:1.6,
        ease:[0.4,0.2,0.2,1]
      },
    }
  }

  const specAnimation = {
    init:{
      y:70,
    },
    visible:{
      y:0,
      transition:{
        delay:2,
        duration:1,
      },
    }
  }

  const specificationSpec = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        delay:2,
        duration:1,
      },
    }
  }

  return (
    <div className="App">
      {isLoading ? (
        <motion.div>
          <Loader setIsLoading={setIsLoading} />
        </motion.div>
      ) : (
        <motion.section className="section" variants={section} initial="init" animate="visible">
          <Navbar />
          <motion.div className='mechanical'>
            <motion.h1 
            className='spec'
            variants={specAnimation}
            initial="init" 
            animate="visible"
            >
              Mechanical Keyboard
            </motion.h1>
          </motion.div>
          <motion.div 
          className='specification' 
          variants={specificationSpec}
          initial="init" 
          animate="visible"
          >
            <p>ultra slim compact wireless mechanical keyboard Hot swappable low profile Gateron Mechanical red switches with RGB backlit</p>
          </motion.div>
          <motion.h1 
          className='keyboard-name-main'
          variants={keyboardNameMain} 
          layoutId="name-1"
          >
            Keychron <span>K7</span> 65 percent
          </motion.h1>
          <div className='image-container'>
            <motion.img 
            src="/keyboard.webp" 
            alt="keyboard keycrhon" 
            className='keyboard-image'
            variants={keyboardImage}
            initial="init"
            animate="visible"
            />
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default App
