import React from 'react'

import style from './VideoSection.module.scss'
import VideoComponent from '@/components/VideoComponent/ui/VideoComponent'


const VideoSection = () => {
  return (
    <section className={style.video}>
        <div className={style.video__container}>
            <VideoComponent/>
        </div>
    </section>
  )
}

export default VideoSection