import React, { FC } from 'react'
import styles from './AboutSection.module.scss'
import Image from 'next/image';

interface IInfo {
    heading: string;
    text: string;
}

const firstInfo = [
    {
        icon: '',
        heading: 'Кухня',
        text: 'Современной кухни в Бишкеке с исключительным подходом к выбору продуктов. Минимум полуфабрикатов и максимум ручной работы: мы сами замешиваем тесто для пасты, варим сыры, выращиваем зелень и даже делаем свой тоник для коктейлей.'
    },
    {
        icon: '',
        heading: 'Заведения',
        text: 'Два этажа заведения поделены на семейную зону с открытой кухней и коктейльную зону с барной стойкой, диджеем и просторной террасой.'

    },
    {
        icon: '',
        heading: 'Бронирования',
        text: 'Мы готовы Вам помочь с выбором необходимого для проведения мероприятия или встречи. Подберем для Вас и для Ваших гостей изысканное блюда которые буду соответствовать вашему мероприятию и приятное локация с видом на город.'

    },
]

const InfoPlate: FC<IInfo> = ({ heading, text }) => {
    return (
        <div>
            <h3 className={styles.infoPlate__heading}>{heading}</h3>
            <p className={styles.infoPlate__text}>{text}</p>
        </div>
    )
}

const AboutSection = () => {

    return (
        <section className={styles.about}>
            <div className={styles.about__container}>
                <div className={styles.contentWrap}>
                    <div className={styles.part_img}>
                        <Image src='/assets/photo.png' height={600} width={493} alt='Да мужик какой-то'/>
                    </div>
                    <div className={styles.part}>
                        {firstInfo.map(info => (
                            <InfoPlate key={info.heading} heading={info.heading} text={info.text} />
                        ))}
                    </div>
                </div>
                <div className={styles.contentWrap}>
                    <div className={styles.part}>
                        {firstInfo.map(info => (
                            <InfoPlate key={info.heading} heading={info.heading} text={info.text} />
                        ))}
                    </div>
                    <div className={styles.part_img}>
                        <Image src='/assets/band.png' height={600} width={493} alt='Тупо BTS'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection