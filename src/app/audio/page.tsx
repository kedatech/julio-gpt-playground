"use client"
import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        const audioElement = audioRef.current;
        console.log(audioElement)
        if(audioElement) audioElement.currentTime = 0;

        const handleTimeUpdate = () => {
            if (audioElement) {
                setCurrentTime(audioElement.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            if (audioElement) {
                setDuration(audioElement.duration);
            }
        };

        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
            audioElement.addEventListener('canplay', handleLoadedMetadata);

            return () => {
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
                audioElement.removeEventListener('canplay', handleLoadedMetadata);
            };
        }
    }, [audioRef]);

    const handlePlayPause = () => {
        const audioElement = audioRef.current;

        if (audioElement) {
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    };

    const handleReset = () => {
        const audioElement = audioRef.current;

        if (audioElement) {
            audioElement.currentTime = 0;
        }
    };

    return (
        <main className='w-full min-h-full flex items-center justify-center'>
            <div className='w-full max-w-lg bg-slate-300 p-4 rounded-md'>
                <audio ref={audioRef} src="/example.mp3" />
                <div>
                    <button className='p-2 bg-blue-800 rounded mr-2 text-white' onClick={handlePlayPause}>
                        { audioRef.current ? audioRef.current?.paused ? 'Play' : 'Pause' : "cargando..."}
                    </button>
                    <button className='p-2 bg-rose-600 rounded mr-2 text-white' onClick={handleReset}>Resetear al Inicio</button>
                </div>
                <div>
                    <p>Current Time: {currentTime.toFixed(2)} seconds</p>
                    <p>Duration: {duration.toFixed(2)} seconds</p>
                </div>
            </div>
        </main>
    );
};

export default AudioPlayer;
