'use client'
import React, { FC, ReactNode } from 'react';
import styles from './BorderButton.module.scss';

interface IBorderButton {
    children: ReactNode
}

const BorderButton: FC<IBorderButton> = ({children}) => {
  return (
    <button className={styles.button}>
        {children}
    </button>
  )
}

export default BorderButton