import React, { useEffect } from 'react';
import FondoHome from '../assets/base/palmeras.png';
import logo1500 from '../assets/base/logo1500.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='Inicio' className="relative">
            <img
                className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1/3"
                src={logo1500}
                alt="logotype" 
                data-aos="zoom-in"
                data-aos-delay="500"
            />
            <img src={FondoHome} alt="palm" />
        </div>
    );
};

export default Home;
