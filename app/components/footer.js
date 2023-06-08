import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

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

          <div className={styles.column}>
            <h3 className={styles.h3}>Links</h3>
            <ul className={styles.ul}>
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

          <div className={styles.column}>
            <h3>Any Question?</h3>
            <div>
              <input
                className={styles.input}
                type="email"
                placeholder="Your email id here"
              />
              <button className={styles.button}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.copyright.row}>
          <div className="footer-menu">
            <a href="">sccci.org.sg</a>
          </div>
          <p>Copyright &copy; 2022</p>
        </div>
      </footer>
    </>
  );
}
