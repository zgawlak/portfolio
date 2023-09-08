import './App.css';
import React, { useState } from 'react';

// icons
import menu from './assets/icons/menu.svg';
import close from './assets/icons/x.svg';

// tech icons
import HTML5 from './assets/icons/html5.svg';
import CSS3 from './assets/icons/css3.svg';
import JavaScript from './assets/icons/javascript.svg';
import Csharp from './assets/icons/c-sharp.svg';
import ReactIcon from './assets/icons/React-icon.svg';

// screenshots
import eCommerce from './assets/img/ecommerce.png';
import ZooSite from './assets/img/zoo-site.png';
import BookPage from './assets/img/book-page.png';
import RealtorProject from './assets/img/realtor-project.png';


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
          <a href="#contact" className='hover:text-purple-700 transition duration-300'>Contact</a>
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
              <a href="#contact" onClick={() => toggleMenu(false)} className='hover:text-purple-700'>Contact</a>
            </div>
          </div>
        </div>

      </header>

      <main>

        <div className="pt-32 pb-5 bg-gray-50 md:py-0">
          <div id="about" className="text-primary w-full flex flex-col h-auto md:h-screen justify-center">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:gap-24">
              <div className="text-center md:text-left md:max-w-xl p-5">
                <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                <p className="text-lg md:text-xl p-5 md:px-0 md:py-5">Hi! I'm <strong>Zoë Gawlak</strong>. I'm a software engineering student with a passion for web development.</p>
                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center md:gap-x-5 mt-5">
                  <p className="font-semibold basis-full md:basis-auto underline md:no-underline decoration-2 underline-offset-2">Tech Stack</p>
                  <ul className="flex gap-5 md:gap-x-7 pt-5 md:pt-0 items-center flex-wrap justify-center md:justify-start">
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
                      <img className="w-8" src={ReactIcon} alt="React" title="React" />
                    </li>
                    <li className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full">
                      <img className="w-8" src={Csharp} alt="C#" title="C#" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-60 h-60 lg:w-80 lg:h-80 bg-about bg-cover bg-center border-4 border-purple-500 about-img"></div>
            </div>
          </div>
        </div>

        <div id="projects" className="bg-purple-50 w-full py-24 px-5">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Projects</h2>
          <p className="text-lg md:text-xl mb-10 text-center">Take a look at some of my work so far!</p>

          <div className="gap-24 flex flex-col justify-center items-center">
            <div className="bg-white p-5 rounded-lg flex justify-center items-center flex-wrap md:flex-nowrap gap-5 shadow-lg">
              <div className="md:w-[500px]">
                <img src={eCommerce} alt="" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-[300px] flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold">Home & Fashion 👚</h3>
                <p className="p-5 md:text-xl">An e-commerce website featuring an updating shopping cart and individual product pages.</p>
                <p><span className="p-2 font-semibold shadow mr-2">React</span> <span className="p-2 font-semibold shadow">Tailwind</span></p>
                <div className="mt-7 text-xl flex gap-5">
                  <a target="_blank" rel="noreferrer" href="https://github.com/zgawlak/ecommerce-shop">Code <i class="fa-brands fa-github fa-lg"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://zgawlak-ecommerce.vercel.app/">Demo <i class="fa-solid fa-up-right-from-square fa-md"></i></a>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg flex justify-center items-center flex-wrap-reverse md:flex-nowrap gap-5 shadow-lg">
              <div className="md:w-[300px] flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold">🦁 Durham Zoo</h3>
                <p className="p-5 md:text-xl">A homepage for a zoo with a gallery, amenities, and ticket information.</p>
                <p><span className="p-2 font-semibold shadow mr-2">CSS</span> <span className="p-2 font-semibold shadow">JavaScript</span></p>
                <div className="mt-7 text-xl flex gap-5">
                  <a target="_blank" rel="noreferrer" href="https://github.com/zgawlak/zoo-site">Code <i class="fa-brands fa-github fa-lg"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://zgawlak.github.io/zoo-site/">Demo <i class="fa-solid fa-up-right-from-square fa-md"></i></a>
                </div>
              </div>
              <div className="md:w-[500px]">
                <img src={ZooSite} alt="" className="rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg flex justify-center items-center flex-wrap md:flex-nowrap gap-5 shadow-lg">
              <div className="md:w-[500px]">
                <img src={BookPage} alt="" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-[300px] flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold">Warriors: Shadow 🐱</h3>
                <p className="p-5 md:text-xl">A simple, sleek page advertising an installment in the Warriors series.</p>
                <p><span className="p-2 font-semibold shadow mr-2">Bootstrap</span> <span className="p-2 font-semibold shadow">JavaScript</span></p>
                <div className="mt-7 text-xl flex gap-5">
                  <a target="_blank" rel="noreferrer" href="https://github.com/zgawlak/book-page">Code <i class="fa-brands fa-github fa-lg"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://zgawlak.github.io/book-page/">Demo <i class="fa-solid fa-up-right-from-square fa-md"></i></a>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg flex justify-center items-center flex-wrap-reverse md:flex-nowrap gap-5 shadow-lg">
              <div className="md:w-[300px] flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold">🏠 Clover Realty</h3>
                <p className="p-5 md:text-xl">A real estate company website with property listings and a contact form.</p>
                <p><span className="p-2 font-semibold shadow">CSS</span></p>
                <div className="mt-7 text-xl flex gap-5">
                  <a target="_blank" rel="noreferrer" href="https://github.com/zgawlak/realtor-project">Code <i class="fa-brands fa-github fa-lg"></i></a>
                  <a target="_blank" rel="noreferrer" href="https://zgawlak.github.io/realtor-project/">Demo <i class="fa-solid fa-up-right-from-square fa-md"></i></a>
                </div>
              </div>
              <div className="md:w-[500px]">
                <img src={RealtorProject} alt="" className="rounded-lg shadow-md" />
              </div>
            </div>

          </div>
        </div>

        <div id="contact" className="w-full py-24 px-5 flex flex-col items-center bg-gray-50">
          <h2 className="text-2xl md:text-4xl font-bold">Contact</h2>
          <p className="text-lg md:text-xl p-3 mb-5">Feel free to get in touch!</p>

          <div className="flex justify-center items-center gap-5 md:gap-16 flex-wrap">
            <div className="flex justify-center items-center gap-3 text-lg md:text-xl flex-wrap">
              <div className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full shadow-md">
                <i class="fa-solid fa-map-location-dot fa-lg"></i>
              </div>
              <p className="basis-full md:basis-auto text-center">Scarborough, ON</p>
            </div>
            <div>
              <div className="flex justify-center items-center gap-3 text-lg md:text-xl flex-wrap">
                <div className="bg-purple-100 flex justify-center items-center w-16 h-16 rounded-full shadow-md">
                  <i class="fa-solid fa-envelope fa-lg"></i>
                </div>
                <a className="basis-full md:basis-auto text-center" href="mailto:zgawlak@my.centennialcollege.ca">zgawlak@my.centennialcollege.ca</a>
              </div>
            </div>
          </div>
        </div>

      </main >
    </div >
  );
}

export default App;
