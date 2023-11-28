import { IoIosDocument } from "react-icons/io";

function Intro() {
    return (
        <>
            <section className='intro' id='home'>
                <div className='overlay_intro'></div>
                <div className='intro__content display-table'>
                    <article className='intro__details-table'>
                        <div className='intro__container'>
                            <h1 className='intro__title'>KENYI ASENCIOS</h1>
                            <h3 className='intro__subtitle'>SOFTWARE FRONTEND DEVELOPER</h3>
                        </div>
                        <div className='intro__cv'>
                            <a href='./KenyiAsencios.pdf' download={''}><span className='cv'>
                                <IoIosDocument size={20} />
                                Mira mi CV</span></a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Intro