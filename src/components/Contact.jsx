import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";

function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="contact__box">
                    <p className="contact__title">Contáctame</p>
                    <article className="contact__details">
                        <div className="contact__personal">
                            <div>
                                <p className="contact__text"> Si llegaste hasta aqui, no dudes en contactarte conmigo.</p>
                            </div>
                            <div className="personal">
                                <div className="contact__phone">
                                    <BsTelephone size={40} />
                                    <p>Celular</p>
                                    <p>51 924533623</p>
                                </div>
                                <div className="contact__mail">
                                    <GoMail size={40} />
                                    <p>Email</p>
                                    <p>asenciosm.k@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="social">
                            <p>Redes Sociales</p>
                        </div>
                        <div className="contact__social">
                            <a href="https://www.linkedin.com/in/kenyi-asencios/">
                                <FaLinkedin size={40} />
                            </a>
                            <a href="https://github.com/kasenciosm">
                                <FaGithub size={40} />
                            </a>
                        </div>
                    </article>
                </div>
                <footer>
                    <span className="footer">
                        <Logo text='{ ka }' />
                        Kenyi Asencios - 2023
                    </span>
                </footer>
            </section>
        </>
    )
}

export default Contact