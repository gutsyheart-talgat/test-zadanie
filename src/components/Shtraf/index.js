import React from "react";
import style from "./shtraf.module.css"

export default function Shtraf({shtrafy}){
    const shtraf =[
        {name:"Свидетельство о регистрации:",info:shtrafy.doc_number ,id:1},
        {name:"Дата постановления:",info: shtrafy.bill_at ,id:2},
        {name:"Нарушение:",info:shtrafy.koap_code ,id:3},
        {name:"Получатель платежа:",info:shtrafy.location ,id:4},
        {name:"ИНН:",info:shtrafy.payee_inn ,id:5},
        {name:"КПП:",info:shtrafy.payee_kpp ,id:6},
        {name:"Расчетный счет:",info:shtrafy.payee_bank_account ,id:7},
        {name:"Банк получателя:",info:shtrafy.payee_bank_name ,id:8},
        {name:"БИК:",info:shtrafy.payee_bank_bik ,id:9},
        {name:"ОКТМО(ОКАТО):",info:shtrafy.payee_oktmo ,id:10},
        {name:"КБК:",info:shtrafy.kbk ,id:11},
        {name:"Сумма штафа:",info:shtrafy.amout ,id:12},
        {name:"Скидка:",info:shtrafy.discount_at ,id:13},
        {name:"К оплате:",info:shtrafy.amount_to_pay ,id:14}
    ]
    return(
        <div className={style.shtrafList}>
            <div className={style.shtrafInfo}>
                <h1 className={style.h1}>Постановление #18810136191111001035</h1>
                <div className={style.info}>
                    {
                        shtraf.map(el=>(
                            <div className={style.shtraf} key={el.id}>
                                <p>{el.name}</p>
                                <p>{el.info}</p>
                            </div>
                        ))
                    }  
                </div>
            </div>  
        </div>
    )
}