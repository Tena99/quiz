import styles from "./Ads.module.css";
import PromoImg from "../assets/promoImg.png";

function Ads({ goToPreviousPage, goToNextPage }) {
  return (
    <div className={styles.page}>
      <div
        className="switcher"
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <button className="prevbutton" onClick={goToPreviousPage}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="nextbutton" onClick={goToNextPage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
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

        <button className={styles.adbutton}>Mehr erfahren!</button>
      </div>
    </div>
  );
}
export default Ads;
