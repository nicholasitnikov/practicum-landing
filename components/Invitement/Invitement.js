
import styles from './Invitement.module.css';

const Invitement = () => {
    return(
        <section className={styles.invitement}>
            <video poster='/images/invitement.png' className={styles.video} controls>
                <source src="/invite.mp4" type='video/mp4;' />
            </video>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>Видеоприглашение</h2>
                <p className={`text ${styles.text}`}>Дениса Соловьева&nbsp;&mdash; эксперта в&nbsp;краткосрочной аренде</p>
            </div>
        </section>
    )
}

export default Invitement;