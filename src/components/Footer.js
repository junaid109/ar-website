import React from 'react'

const Footer = () => {
  return (
    <motion.div animate={{x: 1000}}>
        {/* create twindstyled footer with menu */}
        <div tw="bg-gray-800 text-white text-center p-4">
            <a href="/" tw="text-white hover:text-gray-400">Home</a>
            <a href="/about" tw="text-white hover:text-gray-400">About</a>
            <a href="/contact" tw="text-white hover:text-gray-400">Contact</a>
        </div>


    </motion.div>
  )
}

export default Footer