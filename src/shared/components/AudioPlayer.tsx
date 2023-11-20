"use client"
import React, { useState, useRef, useEffect } from 'react';
import { PlayPause, Restart} from '@/shared/icons'
import { AudioVisualizer } from '@/lib'

interface IAudioPlayerProps {
    urlAudio: string
    blobAudio: Blob
}

const AudioPlayer = ({ urlAudio, blobAudio }: IAudioPlayerProps) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        const audioElement = audioRef.current;
        console.log(audioElement)

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

        if (audioElement) audioElement.currentTime = 0;
        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
            audioElement.addEventListener('canplay', handleLoadedMetadata);

            return () => {
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
                audioElement.removeEventListener('canplay', handleLoadedMetadata);
            };
        }
    }, []);

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
        <div className='h-[30px] w-full max-w-lg'>
            <section className='flex items-start justify-start'>
                <audio ref={audioRef} src={urlAudio} />
                    <button className='p-2 rounded mr-2 text-white' onClick={handlePlayPause}>
                    <PlayPause type={audioRef.current ? audioRef.current?.paused ? 'Play' : 'Pause' : "Play"} />
                    </button>


                <AudioVisualizer
                    height={50}
                    width={150}
                    blob={blobAudio}
                    gap={3}
                    barWidth={5}
                    currentTime={currentTime}
                    barColor='#213948'
                    barPlayedColor='#2F80ED'
                />  
                <button className='p-2 rounded mr-2 text-white' onClick={handleReset}>
                    <Restart />
                </button>
            </section>
            <section>
                {/* <label className='text-gray-700 m-0 p-0'>{currentTime.toFixed(2)} / {duration.toFixed(2)}</label> */}
            </section>
        </div>
    );
};

export default AudioPlayer;
