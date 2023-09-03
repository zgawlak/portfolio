import './App.css';
import React, { useState } from 'react';
import menu from './assets/icons/menu.svg';
import close from './assets/icons/x.svg';
import HTML5 from './assets/icons/html5.svg';
import CSS3 from './assets/icons/css3.svg';
import JavaScript from './assets/icons/javascript.svg';
import Csharp from './assets/icons/c-sharp.svg';
import ReactIcon from './assets/icons/React-icon.svg';
import Tailwind from './assets/icons/tailwind.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (x) => {
    setIsOpen(x);
  }

  return (
    <div>
      <header className='text-primary flex justify-between px-8 py-6 border-b w-full shadow-md shadow-purple-200 bg-white fixed'>

        <h1 className='font-bold text-2xl'>zgawlak</h1>
        <nav className='hidden md:flex gap-x-5 text-xl'>
          <a href="#about" className='hover:text-purple-700 transition duration-300'>About</a>
          <a href="#projects" className='hover:text-purple-700 transition duration-300'>Projects</a>
          <a href="#contacts" className='hover:text-purple-700 transition duration-300'>Contact</a>
        </nav>
        <div className='md:hidden flex justify-center cursor-pointer'>
          <img onClick={() => toggleMenu(true)} src={menu} alt="open menu" />
        </div>
        <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full transition-all duration-300`}>
          <img onClick={() => toggleMenu(false)} src={close} className='cursor-pointer absolute top-8 right-8 w-8' alt="close menu" />
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
        <div className="pt-32 pb-5 bg-gray-50 md:py-0">
          <div id="about" className="text-primary w-full flex flex-col h-auto md:h-screen justify-center">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:gap-24">
              <div className="text-center md:text-left md:max-w-xl p-5">
                <h2 className="text-3xl md:text-5xl font-bold">Zoë Gawlak</h2>
                <p className="text-lg md:text-xl p-5 md:px-0 md:py-5">Hi! I'm a software engineering student with an interest in web development.</p>
                <ul className="flex gap-5 md:gap-x-7 items-center flex-wrap justify-center mt-5">
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={HTML5} alt="HTML5" title="HTML5" />
                  </li>
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={CSS3} alt="CSS3" title="CSS3" />
                  </li>
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={JavaScript} alt="JavaScript" title="JavaScript" />
                  </li>
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={Csharp} alt="C#" title="C#" />
                  </li>
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={ReactIcon} alt="React" title="React" />
                  </li>
                  <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                    <img className="w-8" src={Tailwind} alt="Tailwind" title="Tailwind" />
                  </li>
                </ul>
              </div>
              <div className="w-60 h-60 lg:w-80 lg:h-80 bg-about bg-cover bg-center border-4 border-purple-500 about-img"></div>
            </div>
          </div>
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
