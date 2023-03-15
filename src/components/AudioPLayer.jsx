import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';
import logo1500 from '../assets/base/logo1500.png';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // const [duration, setDuration] = useState(0);
    const audioPlayer = useRef();
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration); // eslint-disable-line no-unused-vars
        // setDuration(seconds);
        audioPlayer.current.volume = volume;
    }, [audioPlayer?.current?.hasLoadedMetadata, audioPlayer?.current?.readyState, volume]);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    const handleVolumeChange = (event) => {
        setVolume(event.target.value / 100);
    };

    return (
        <div className="flex  text-white justify-center items-center px-4 bg-black h-20  bottom-0 w-full fixed" >

            <img
                className=" w-36 top-0 "
                src={logo1500}
                alt="logotype"

            />

            <audio ref={audioPlayer} src='https://radiostreamingserver.com.ar/proxy/tropibox/stream?type=.mp3' preload='metadata'></audio>

            <button className='flex px-4 border-separate border-cyan-300 justify-center items-center text-orange-500 mt-2' onClick={togglePlayPause}>
                {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
            </button>
            <FaVolumeUp className='w-23 m-2' />
            <div className='flex items-center'>
                <input type="range" min="0" max="100" onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

export default AudioPlayer
