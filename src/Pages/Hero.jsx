import React from 'react'
import sport from '/assets/sport.png'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className='absolute container2'>
            <div className='con1'>
                <h1 className="welcome  text-md sm:text-xl md:text-2xl font-bold tracking-tighter text-yellow-300">Welcome to Curry Anna Book</h1>
                <h1 className='info text-md sm:text-lg md:text-xl font-bold tracking-tighter text-yellow-300'>India's No.1 sports ID provider since 2010</h1>
                <p className='abt text-md md:text-lg font-mono tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis nobis aspernatur incidunt temporibus eligendi et ipsa cumque aut consequuntur.</p>
                <div className=''>
                    <button className='btn px-2 border-2 border-yellow-200 rounded-md hover:bg-yellow-300 hover:text-black'><h1 className='mt-3'>Contact Us</h1></button>
                    
                </div>
            </div>
            <div className='con2'>
                <img className="sport-img" src={sport} alt="" />
            </div>
        </div>
        <div className='container1 bg-[url("assets/background.jpg")]'>
        </div>
    </div>
  )
}

export default Hero
