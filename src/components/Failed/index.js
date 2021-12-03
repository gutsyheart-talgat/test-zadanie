import React from "react";
import notFound from '../../not-found.svg'
import style from './failed.module.css'

export default function Failed(){
    return(
        <div className={style.back}>
            <img src={notFound}/>
            <h1>Штраф не найден</h1>
        </div>
    )
}