
import { useEffect, useMemo, useState } from 'react';
import styles from './Number.module.css';
import { useInView } from 'react-intersection-observer';



const Number = () => {

    const [number, setNumber] = useState(0);
    const [ref, inView, entry] = useInView();

    useEffect(() => {
        let id
        if(inView) {
            id = setInterval(() => {
                if(number >= 285137740) {
                    clearInterval(id);
                } else {
                    setNumber(number += 1000000);
                }
            }, 0.0001)
        } else {
            clearInterval(id)
        }
    }, [inView])

    const renderNumber = useMemo(() => {
        return number.toString().split('').map((el, index) => {
            return <span className={styles.counterItem} key={index}>{el}</span>
        })
    }, [number])

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <section ref={ref} className={styles.number}>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>Основано на собственой сети апарт-отелей Orange Apartments 24</h2>
                <div className={styles.counter}>
                    { renderNumber }

                    <span className={styles.counterSybmol}>₽</span>
                </div>
                <div className={styles.caption}>
                    <p className={styles.captionHeading}>
                        общая стоимость недвижимости в управлении
                    </p>
                    <p className={styles.captionDate}>
                        на { new Date().toLocaleDateString('ru-RU', dateOptions) }
                    </p>
                </div>
            </div>
            <img src="/images/logo_orange.svg" />
        </section>
    )

}

export default Number;