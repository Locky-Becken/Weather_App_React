import React, { useState } from 'react'
import Formulario from './Form/Form'
import Weather from './weather/Weather'
import './global.css'
import {getInfo} from './Api/Api'

function App() {

    const [store, setStore] = useState(getInfo())

    return(
        <div>
            <Formulario setStore={setStore}/>
            <Weather info = {store}/>
        </div>
    );
}

export default App