import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
function CardsGridAnimation({selectedPage,children}) {
  return (
    <AnimatePresence mode='wait'>
        <motion.div key={selectedPage}
                    exit={{ y: -10, opacity: 0 }}>
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default CardsGridAnimation;