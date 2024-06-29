import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './MenuSection.module.scss';

interface IMenuCard {
    title: string;
    href: string;
    src: string;
}

const MenuCard: FC<IMenuCard> = ({title, href, src}) => {
    return(
        <div className={styles.menu__card}>
            <Image src={src} height={213} width={213} alt={title}/>
            <h3><Link href={href}>{title}</Link></h3>
        </div>
    )
}

const MenuSection = () => {

    const menuCards = [
        {src: '/assets/menu1.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu2.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu3.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu4.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu5.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu6.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu1.png', title: 'Японская кухня', href: '#'},
        {src: '/assets/menu2.png', title: 'Японская кухня', href: '#'},
    ]

  return (
    <section className={styles.menu}>
        <div className={styles.menu__container}>
            <h2>Меню</h2>
            <ul className={styles.menu__cardList}>
                {menuCards.map(el => (
                    <li key={el.src}>
                        <MenuCard src={el.src} title={el.title} href={el.href}/>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default MenuSection