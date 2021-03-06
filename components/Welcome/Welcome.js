
import styles from './Welcome.module.css';

const Welcome = () => {

    return(
        <section className={styles.welcome}>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>Ваш эксперт. Денис&nbsp;Соловьёв</h2>
                <p className={`text ${styles.text}`}>Многодетный отец. Бизнесмен. Инвестор. Ваш&nbsp;путеводитель в&nbsp;мире реального бизнеса</p>

                <article className={styles.item}>
                    <img src='/icons/location-with-circle.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Orange Apartments 24</h3>
                        <p className={styles.itemText}>33&nbsp;апарт-отеля в&nbsp;4&nbsp;городах за&nbsp;7&nbsp;месяцев</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/bitcoin.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Фонд криптовалюты</h3>
                        <p className={styles.itemText}>Более 50&nbsp;инвесторов. 2&nbsp;шахты по&nbsp;500 карт</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/investment.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Инвестиции в&nbsp;недвижимость</h3>
                        <p className={styles.itemText}>Выкуп коммерческого и&nbsp;жилого фонда</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/land.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Купля/продажа земли</h3>
                        <p className={styles.itemText}>Смена статуса&nbsp;&mdash; увеличение стоимости</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/taxi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Такси «Апельсин»</h3>
                        <p className={styles.itemText}>Более 1000 машин в&nbsp;автопарке</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/sushi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Доставка пиццы и суши «Покенон»</h3>
                        <p className={styles.itemText}>присутствие в&nbsp;7&nbsp;городах Подмосковья</p>
                    </div>
                </article>

            </div>

            <img src='images/welcome.png' className={styles.image} />
        </section>
    )

}

export default Welcome;