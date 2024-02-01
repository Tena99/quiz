import styles from "./Ads.module.css";
import PromoImg from "../assets/promoImg.png";

export default function Ads() {
  return (
    <div className={styles.ad}>
      <p className={styles.title}>
        Buche das taktsoft bootcamp! <br /> Es ist toll!
      </p>
      <p className={styles.description}>
        Unsere Coding Bootcamps In unseren Bootcamps bilden wir
        Quereinsteiger:innen in nur vier Monaten zu Developern aus. Das könnte
        was für dich sein? Top Dozent:innen Betreuung und Training durch
        professionellen Career Coach Premium Ausstattung Beste Karrierechancen
        nach erfolgreichem Abschluss
      </p>
      <img className={styles.promoimg} src={PromoImg} alt="PromoImg" />

      <button
        className={styles.adbutton}
        href="https://https://talents.taktsoft.com/"
      >
        Visit website
      </button>
    </div>
  );
}
