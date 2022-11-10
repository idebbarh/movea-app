import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { nanoid } from 'nanoid';
function CardsGridAnimation({children}) {
  return (
    <AnimatePresence mode='wait'>
        <motion.div key={nanoid()}
                    exit={{ y: -10, opacity: 0 }}>
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default CardsGridAnimation;