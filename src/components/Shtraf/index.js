import React from "react";
import { connect } from 'react-redux' 
import ShtrafList from './ShtrafList'
 function Shtraf (){
    return(
        <div>{success && <ShtrafList/>}</div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return{
        success: state.success
    }
}
export default connect(mapStateToProps)(Shtraf)
