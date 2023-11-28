import React from 'react'
import Data from '../service/data'

function Buttons({ menuItems, filterItems, setItems }) {
    return (
        <>
            <ul className='selection'>
                {menuItems.map(val => (
                    <li key={val} onClick={() => filterItems(val)}>
                        {val}
                    </li>

                ))}
                <li onClick={() => setItems(Data)}>Todos</li>
            </ul>
        </>
    )
}

export default Buttons