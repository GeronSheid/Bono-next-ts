import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {

    const navLinks = [
        { href: '#', label: 'Главная' },
        { href: '#', label: 'Меню' },
        { href: '#', label: 'Доставка' },
        { href: '#', label: 'О нас' },
        { href: '#', label: 'Контакты' },
    ]

    const contactsLinks = [
        { href: 'tel:+996 501 06 55 05', label: '+996 501 06 55 05'},
        { href: 'mailto:bono51@gmail.com', label: 'bono51@gmail.com'}
    ]

    const socialsLinks = [
        { href: '#', label: 'instagram' },
        { href: '#', label: '2Gis' }
    ]


    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__row}>
                    <div className={styles.header__linkbar}>
                        <div className={styles.header__links}>
                            {contactsLinks.map(link => <Link className={styles.header__navItem} key={link.label} href={link.href}>{link.label}</Link>)}
                        </div>
                        <div className={styles.header__links}>
                            {socialsLinks.map(link => <Link className={styles.header__navItem} key={link.label} href={link.href}>{link.label}</Link>)}
                        </div>
                    </div>
                    {/* Тут будет компонента кнопки */}
                    <button>
                        Заказать
                    </button>
                </div>
            </div>
            <div className={styles.header__container}>
                <div className={styles.header__row}>
                    <div className={styles.header__menu}>
                        <Image
                            src='/assets/ьоно 1.svg'
                            width={125}
                            height={33}
                            alt='logo'
                        />
                        <nav>
                            <ul className={styles.header__nav}>
                                {navLinks.map(link =>
                                    <li key={link.label}>
                                        <Link className={styles.header__navItem} href={link.href}>{link.label}</Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
