import { Link } from "react-router-dom";
import css from './Navigation.module.scss'

export default function Navigation() {
    return (
        <nav>
            <ul className={css.list}>
                <li className={css.item}><Link to="/about" className={`${css.item_link} menu`}>O naší</Link></li>
                <li className={css.item}><Link to="/services" className={`${css.item_link} menu`}>Naše služby</Link></li>
                <li className={css.item}><Link to="/gallery" className={`${css.item_link} menu`}>Fotogalerie prací</Link></li>
                <li className={css.item}><Link to="/jobs" className={`${css.item_link} menu`}>Volná místa</Link></li>
                <li className={css.item}><Link to="/contacts" className={`${css.item_link} menu`}>Kontakty</Link></li>
            </ul>
        </nav>
    );
}