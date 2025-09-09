// import content from '../../content/header.json';
import Container from '../../reuseable/Container/Container';
import { Link } from "react-router-dom";
import css from './Header.module.scss'
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return <Container>
        <header className={css.header}>
            <Link to={'/'} className=''>
                <img src="/img/logo_1x.png" srcSet="/img/logo_1x.png 1x, /img/logo_2x.png 2x" alt="Logo" className={css.logo_image} />
            </Link>

            <Navigation />

            {/* <a href="#">{content.mainPageLinkText}</a> */}
        </header>
    </Container>
}