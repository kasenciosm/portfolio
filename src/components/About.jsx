import kenyi from '/kenyi.png'

function About() {
    return (
        <section id='about' className='about__section'>
            <article className='about__details'>
                <div className='about__details-intro'>
                    <div className='details__intro'>
                        <h2 className='about__title'>Acerca de mí...</h2>
                        <h3 className='about__subtitle'>Desarrollador Frontend</h3>
                        <p>Desarrollador Web con sólidos conocimientos en HTML5, CSS3 y JavaScript y en
                            manejos de tecnologías como React y Node.js, control de versiones con Git. Cuento con conocimientos básicos
                            en TypeScript y PostgreSQL.
                        </p>
                    </div>
                    <div className='photo'>
                        <img src={kenyi} width={200} />
                    </div>
                </div>
                <div>
                </div>
            </article>

        </section>
    )
}

export default About