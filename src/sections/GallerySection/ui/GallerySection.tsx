import GallerySlider from '@/components/GallerySlider/ui/GallerySlider'
import React from 'react'

import styles from './GallerySection.module.scss';

const GallerySection = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__headingWrap}>
        <button id='gallerySliderPrev'>
          <svg width="18" height="45" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.10886 41.2107C1.8396 39.0692 2.0446 35.8442 4.56675 34.0073L38.4351 65.968C39.2384 66.7261 39.1659 67.8678 38.273 68.5181L36.9396 69.4892C36.0467 70.1395 34.6717 70.052 33.8683 69.2939L4.10886 41.2107Z" fill="currentColor" />
            <path d="M4.10886 33.4558C1.8396 35.5973 2.0446 38.8223 4.56675 40.6592L38.4351 8.69852C39.2384 7.94042 39.1659 6.79871 38.273 6.14843L36.9396 5.17733C36.0467 4.52705 34.6717 4.61446 33.8683 5.37256L4.10886 33.4558Z" fill="currentColor" />
          </svg>
        </button>
        <h2 className={styles.gallery__heading}>Фотогалерея</h2>
        <button id='gallerySliderNext'>
          <svg width="18" height="45" viewBox="0 0 40 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.8911 37.2107C38.1604 35.0692 37.9554 31.8442 35.4333 30.0073L1.5649 61.968C0.761555 62.7261 0.83413 63.8678 1.727 64.5181L3.06039 65.4892C3.95325 66.1395 5.32831 66.052 6.13165 65.2939L35.8911 37.2107Z" fill="currentColor" />
            <path d="M35.8911 29.4558C38.1604 31.5973 37.9554 34.8223 35.4333 36.6592L1.5649 4.69852C0.761555 3.94042 0.83413 2.79871 1.727 2.14843L3.06039 1.17733C3.95325 0.527053 5.32831 0.61446 6.13165 1.37256L35.8911 29.4558Z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <GallerySlider/>
    </section>
  )
}

export default GallerySection
