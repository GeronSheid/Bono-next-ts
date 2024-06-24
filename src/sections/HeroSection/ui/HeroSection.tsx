import React from 'react';
import { HeroSlider } from '@/components/HeroSlider/ui/HeroSlider';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
          <div className={styles.hero__container}>
            
            <HeroSlider />
            
          </div>
        </section>
  )
}

export default HeroSection