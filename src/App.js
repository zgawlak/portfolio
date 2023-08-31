import './App.css';
import React, { useState } from 'react';
import menu from './assets/icons/menu.svg';
import close from './assets/icons/x.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (x) => {
    setIsOpen(x);
  }

  return (
    <div>
      <header className='sticky flex justify-between px-8 py-6 border-b shadow-md shadow-purple-200'>
        <h1 className='font-bold text-2xl'>zgawlak</h1>
        <nav className='hidden md:flex gap-x-5 text-xl'>
          <a href="#about" className='hover:text-purple-700'>About</a>
          <a href="#projects" className='hover:text-purple-700'>Projects</a>
          <a href="#contacts" className='hover:text-purple-700'>Contact</a>
        </nav>
        <div className='md:hidden flex justify-center cursor-pointer'>
          <img onClick={() => toggleMenu(true)} src={menu} alt="open menu" />
        </div>
        <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full transition-all duration-300 z-20`}>
          <img onClick={() => toggleMenu(false)} src={close} className='cursor-pointer absolute top-8 right-8 w-8' alt="close menu"/>
          <div className='flex justify-center items-center p-5 h-full'>
            <div className='flex flex-col gap-y-8 text-2xl text-center'>
              <a href="#about" onClick={() => toggleMenu(false)} className='hover:text-purple-700'>About</a>
              <a href="#projects" onClick={() => toggleMenu(false)} className='hover:text-purple-700'>Projects</a>
              <a href="#contacts" onClick={() => toggleMenu(false)} className='hover:text-purple-700'>Contact</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="about">
          <h2>About</h2>
        </div>
        <div id="projects">
          <h2>Projects</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
        </div>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
