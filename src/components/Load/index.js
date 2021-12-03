import React from "react";
import style from './load.module.css'

export default function Load(){
    return(
        <div className={style.back}>
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden ">Loading...</span>
            </div>
            <p>Загрузка</p>
        </div>
    )
}