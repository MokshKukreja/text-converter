import React from 'react'

function Alerts(props) {
    return (
       props.alert&& <div className={`alert alert-${props.alert.type}`} role="alert">
         <strong>{props.alert.type}:</strong> {props.alert.msg}
        </div>
    )
}

export default Alerts