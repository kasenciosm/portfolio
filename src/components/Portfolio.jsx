import { useState } from 'react';
import Data from './service/data'
import Card from "./utils/Card";
import Buttons from './utils/Buttons';

function Portfolio() {
    const [item, setItems] = useState(Data)
    const menuItems = [...new Set(Data.map((val) => val.category))]

    const filterItems = (cat) => {
        const newItems = Data.filter((newVal) => newVal.category === cat)
        setItems(newItems)
    }

    return (
        <>
            <section className='portfolio' id='portfolio'>
                <div className='port__details'>
                    <h2 className='port__title'>Mi Portafolio</h2>
                    <h3 className='port__subtitle'>Trabajos Recientes</h3>
                    <Buttons menuItems={menuItems}
                        filterItems={filterItems}
                        setItems={setItems} />
                </div>
            </section>
            <div className="projects">
                <Card item={item} />
            </div >
        </>
    )
}

export default Portfolio