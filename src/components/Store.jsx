import React from 'react'
import remera1 from '../assets/tienda/remera1.jpg'
import remera2 from '../assets/tienda/remera2.jpg'
import remera3 from '../assets/tienda/remera3.jpg'
import remera4 from '../assets/tienda/remera4.jpg'
import remera5 from '../assets/tienda/remera5.jpg'
import remera6 from '../assets/tienda/remera6.jpg'
import remera7 from '../assets/tienda/remera7.jpg'
import { IoStorefrontSharp } from 'react-icons/io5'



const Store = () => {
    const remeras = [
        {
            id: 1,
            title: "nunca me faltes",
            artist: "antonio rios",
            price: 1700,
            link: 'https://tropibox.flashcookie.com',
            src: remera1,
            category: 'clasicos castellano',
            description: 'Album: El Maestro. Lanzamiento: 1996. Mistica cancion de Antonio Rios ya como solista. Ranckeada dentro de los temas mas importantes y conocidos de Latinoamerica',
        },
        {
            id: 2,
            title: "cuidado la bomba",
            artist: "ricky maravilla",
            price: 1700,
            link: 'https://tropibox.flashcookie.com',
            src: remera2,
            category: 'clasicos castellano',
            description: 'Album: El Maestro.',
        },
        {
            id: 3,
            title: "488km ida",
            artist: "cuarteto imperial",
            price: 2100,
            link: 'https://tropibox.flashcookie.com',
            src: remera3,
            category: 'clasicos castellano',
            description: 'Album: El Maestro.',
        },
        {
            id: 4,
            title: "cajita feliz",
            artist: "mc caco",
            price: 1900,
            link: 'https://tropibox.flashcookie.com',
            src: remera4,
            category: 'clasicos castellano',
            description: 'Album: El Maestro.',
        },
        {
            id: 5,
            title: "comprale un chori",
            artist: "pocho la pantera",
            price: 1900,
            link: 'https://tropibox.flashcookie.com',
            src: remera5,
            category: 'clasicos castellano',
            description: 'Album: El Maestro.',
        },
        {
            id: 6,
            title: "street of separation",
            artist: "nestor in block",
            price: 1900,
            link: 'https://tropibox.flashcookie.com',
            src: remera6,
            category: 'classics hits',
            description: 'Album: El Maestro.',
        },
        {
            id: 7,
            title: "never you leave me",
            artist: "anthonny rivers",
            price: 1900,
            link: 'https://tropibox.flashcookie.com',
            src: remera7,
            category: 'classics hits',
            description: 'Album: El Maestro.',
        },
    ]






    return (
        <div name='TropicStore' className=' bg-gradient-to-t from-black to-slate-900 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 flex flex-row gap-4 items-center mt-3 mb-4' >

                    <p className='text-7xl font-semibold inline border-b-4 border-orange-400 '> TropicStore  </p>
                    <span> <IoStorefrontSharp className='text-white text-6xl' /></span>
                    <p className='py-6'>ULTIMOS LANZAMIENTOS</p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-12 py-3'>

                    {
                        remeras.map(({ id, src, title, description, price, category, artist, link }) => (

                            <div key={id} className='rounded-lg bg-gradient-to-t from-black to-slate-900 border-4 border-orange-400 duration-200 hover:scale-105'>

                                <img src={src} alt="" className='rounded-md' />
                                <div className='flex items-center justify-center flex-col px-4 py-3 mt-1 rounded-md' >
                                    <h3 className='pb-2 text-2xl font-semibold uppercase' >{artist} </h3>
                                    <h3 className='pb-2 text-2xl uppercase text-orange-400 '> {title}</h3>
                                    <div className='flex flex-col justify-center py-3 '>
                                        <p className='pb-2 uppercase text-center'>{price}</p>
                                        <p className='py-2 uppercase text-center'>{category}</p>
                                        <p className='py-2 uppercase text-center'>{description}</p>
                                        <p className='py-2 text-orange-400 text-center'>{link} </p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Store