import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img 
            src={logo} 
            className='w-42 h-14 object-contain' 
            alt='Logo'
        />
        <button 
            type='button' 
            onClick={() => window.open('https://github.com/Ragul8775')}
            className='black_btn'
        >
            Github
        </button>
    </nav>
    <h1 className='head_text'>Summarize Articles with<br />
    <span className='orange_gradient'>OpenAI GPT-4</span></h1>
    <h2 className='desc'>
    Streamline Your Reading with SummWize, 
    Your Open-Source Article Summarizer – Turning Lengthy Articles into Clear, 
    Concise Gems of Knowledge.
    </h2>
</header>
  )
}

export default Hero