import styles from "./Ads.module.css";
import PromoImg from "../assets/promoImg.png";

function Ads({ goToPreviousPage, goToNextPage }) {
  return (
    <div className={styles.page}>
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

        <a
          href="https://www.taktsoft.com/campus/talents"
          target="_blank"
          rel="noreferrer"
          className={styles.adbutton}
        >
          Mehr erfahren!
        </a>

        <button className={styles.prevbutton} onClick={goToPreviousPage}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className={styles.nextbutton} onClick={goToNextPage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
export default Ads;
