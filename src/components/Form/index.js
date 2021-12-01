import React from "react";
import {connect} from 'react-redux'
import {getShtraf} from '../../store/action'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    sumbitHundler = ev =>{
        ev.preventDefault()
        const {title} = this.state
        const shtraf={
            title
        }
        this.props.getShtraf(shtraf)
    }
    changeInputHandler = ev =>{
        ev.persist()
        this.setState(prev=>({...prev, ...{
            [ev.target.name]:ev.target.value
        }}))
    }
    render(){
        return(
            <form onSubmit={this.sumbitHundler}>
                <div className="form">
                    <input 
                    id="title"
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.changeInputHandler}
                    className="inp"
                    placeholder="Введите УИН"
                    />
                    <button className="btn" type="submit">Найти</button>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps ={
    getShtraf

}

export default connect(null,mapDispatchToProps)(Form)