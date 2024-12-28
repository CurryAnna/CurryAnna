import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faPinterest, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
const  Footer = () => {
  return (
    <>
    <div className="footer h-auto lg:h-52 bg-black w-full md:w-[80vw] border-t-2 border-yellow-300 border-b-2 p-4 flex justify-center items-center flex-col sm:flex-col md:flex-row gap-8 md:gap-0">
        <div className="left text-yellow-200 w-full md:w-[50%] flex justify-center items-center md:justify-start flex-wrap gap-2 px-8">
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>About</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Privacy Policy</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Blog</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Contact</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Terms & Conditions</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Sports ID</button>
            <button className='hover:bg-yellow-300 hover:text-black min-w-[148px] h-[38px] border-yellow-200 border-2'>Disclaimer</button>
        </div>
        <div className="right w-full md:w-[40%] text-white flex justify-center items-center flex-col gap-8">
            <h3>Follow us on social media</h3>
            <div className='text-6xl'>
                <a href=""><FontAwesomeIcon icon={faTelegram} /></a>
                <a href=""  className='ml-4'><FontAwesomeIcon icon={faPinterest} /></a>
                <a href=""  className='ml-4'><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href=""  className='ml-4'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    </div>
    <div className='h-auto text-white w-full md:w-[40%] text-center mt-4'>
        <p>Copyright © 2024 Curry Anna Official. All rights reserved. Unauthorized reproduction or distribution of any content on this website is prohibited.</p>
    </div>
    </>
  )
}

export default Footer