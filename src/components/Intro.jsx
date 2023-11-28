import { IoIosDocument } from "react-icons/io";

function Intro() {
    return (
        <>
            <section className='intro' id='home'>
                <div className='intro__container'>
                    <div className="intro__details">
                        <h1 className='intro__title'>KENYI ASENCIOS</h1>
                        <h3 className='intro__subtitle'>FRONTEND DEVELOPER</h3>
                        <div className="intro__cv">
                            <a href='./KenyiAsencios.pdf' download={''}><span className='cv'>
                                <IoIosDocument size={20} />
                                Mira mi CV</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro