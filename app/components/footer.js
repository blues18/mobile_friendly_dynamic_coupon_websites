import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.rowPrimary}>
          <div className={styles.column.about}>
            <h3 className={styles.h3}>Connect</h3>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Singapore Chinese chamber of commerce & industry,
            </p>
            <div className={styles.social}>
              <i>
                <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
              </i>
              <i>
                <FontAwesomeIcon icon={faTwitterSquare} size="2xl" />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
              </i>
            </div>
          </div>

          <div className="column link">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>Newsletter</h3>
          </div>
        </div>

        <div className="row copyright">
          <div className="footer-menu">
            <a href="">sccci.org.sg</a>
          </div>
          <p>Copyright &copy; 2022</p>
        </div>
      </footer>
    </>
  );
}
