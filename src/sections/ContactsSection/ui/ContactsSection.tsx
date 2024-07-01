import React from 'react';
import styles from './ContactsSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ContactsSection = () => {
  return (
    <section className={styles.contacts}>
        <div className={styles.contacts__container}>
            <div>
                <Image width={707} height={500} src={'/assets/women.png'} alt='' />
            </div>
            <div className={styles.contacts__textPart}>
                <div className={styles.contacts__textBlock}>
                    <h3>Мы открыты с 10:00 до 02:00</h3>
                    <p>Работаем в будни и выходные дни с 10:00 до 02:00. Бронируйте столики по телефону: </p>
                    <Link href={'tel: +996 0220140866'}>+996 0220140866</Link>
                    <Link href={'tel: +996 0220140866'}>+996 0220140866</Link>
                </div>
                <div className={styles.contacts__textBlock}>
                    <h3>С нетерпением ждем вас</h3>
                    <p>на улице Сухэ-Батора, 17
                    6-й мк-р, Октябрьский район, столица Бишкек,</p>
                </div>
                <div className={styles.contacts__textBlock}>
                    <Link href={'#'}>@bono.bar.bishkek</Link>
                    <Link href={'#'}>ссылка на 2гис</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactsSection