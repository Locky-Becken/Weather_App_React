import React, {useState} from 'react'
import {getCity, getInfo} from '../Api/Api'
import {BiSearchAlt2} from 'react-icons/bi' 

import './form.css'

function Formulario(props) {
    const [city, setCity] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        await getCity(city)
        props.setStore(getInfo())
    }

    return(
        <header>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text' 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder='City'
                    />
                    <button><BiSearchAlt2 style={{width: '20px', height: '20px'}}/></button>
                </label>

            </form>
        </header>
    );
}

export default Formulario