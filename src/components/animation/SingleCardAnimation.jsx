import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {nanoid} from 'nanoid'
function SingleCardAnimation({index,children}) {
  return (
    <AnimatePresence mode='wait'>
        <motion.div key={nanoid()}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ delay: index/10 }}
                    >
            <motion.div whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}>
                {children}
            </motion.div>
        </motion.div>
    </AnimatePresence>
  )
}

export default SingleCardAnimation