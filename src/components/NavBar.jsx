import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'




const NavBar = () => {
    const [nav, setNav] = useState(false);


    const links = [
        {
            id: 1,
            link: 'Inicio'
        },
        {
            id: 2,
            link: 'Top5'
        },
        {
            id: 3,
            link: 'Tv/Video'
        },
        {
            id: 4,
            link: 'TropicStore'
        },
        {
            id: 5,
            link: 'Contact'
        },

    ]




    return (
        <div className="flex justify-between items-center text-white bg-black w-full h-20 px-4 fixed">
            <div>
                <h1 className='font-semibold text-3xl pl-6'>Tropibox</h1>
            </div>

            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-light  hover:scale-105 duration-200'>{link}</li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-orange-400 md:hidden'>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-300 to-orange-700 '>

                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link}</li>
                    ))}

                </ul>
            )}


        </div>
    )
}

export default NavBar