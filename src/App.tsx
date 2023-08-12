import React from 'react'
import './App.css'
import Header from './Header'
import anuj from './assets/anuj.jpg'
const App:React.FC = () => {
  return (
    <div className='container h-screen'>
      <Header />
      <div className='hero container flex flex-col gap-4 content-center items-center justify-center h-[100%]'>
       <div className='img-container h-[40%] w-[80%] sm:h-50 sm:w-80  relative flex justify-center items-center '>
        <div className='img-bg h-[100%] w-[100%] absolute z-0 flex rounded-full  content-center '>
        </div>
          <img src={anuj} alt="anuj" className='h-[98%] w-[98%] z-10 p-1 rounded-full' />
       </div>
       <h1 className='gradient-text Welcome'>Welcome</h1>
      <p className=' ml-[50%] font-bold text-xl'>
         I am Anuj Kumar Kheria, I am a Web developer, designer.
        </p>
        </div>
    </div>
  )
  }
export default App