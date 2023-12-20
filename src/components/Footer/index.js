import "./Footer.css"

const Footer = () => {
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="www.facebook.com" target="_blank"><img src="/img/fb.png" alt=""/></a>
                    </li>
                    <li>
                        <a href="www.twitter.com" target="_blank"><img src="/img/tw.png" alt=""/></a>
                    </li>
                    <li>
                        <a href="www.instagram.com" target="_blank"><img src="/img/ig.png" alt=""/></a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/logo.png" alt="" />
            </section>
            <section>
                <p>Desenvolvido por José</p>
            </section>
        </footer>
    )
}

export default Footer;