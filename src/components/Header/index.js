import React from "react";
import sh from '../../sh.svg'


export default function Header(){
    return(
        <header className="head">
            <div className="img"><img src={sh}/></div>
            <p>ШТРАФОВ НЕТ</p>
        </header>
    )
}