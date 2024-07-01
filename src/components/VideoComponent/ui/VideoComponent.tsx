'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import background from '../../../../public/assets/poster.jpg'
import styles from './VideoComponent.module.scss';

const VideoComponent = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className={styles.video}>
            {
                isPlaying 
                ?
                    <iframe 
                        src="https://www.youtube.com/watch?v=BBJa32lCaaY&ab_channel=LegacyPNDA" 
                        width="1100"
                        height="500"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                :
                    <>
                        <Image width={1100} height={500} src={background} alt='' />
                        <button className={styles.video__btn} onClick={() => setIsPlaying(true)}>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#CB7C5A" />
                                <path d="M50.5 37.5981C52.5 36.4434 52.5 33.5566 50.5 32.4019L29.5 20.2776C27.5 19.1229 25 20.5662 25 22.8756V47.1244C25 49.4338 27.5 50.8771 29.5 49.7224L50.5 37.5981Z" fill="white" />
                            </svg>
                        </button>
                        <div className={styles.video__info}>
                            <h3>Оцените лучший ресторан - Бар</h3>
                            <p>и проведите время с чутким персоналом которые обслужат вас и ваших гостей в самом лучшем формате!</p>
                        </div>
                    </>
            }
        </div>
    )
}

export default VideoComponent