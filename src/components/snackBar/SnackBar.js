import React from 'react'
import './snackBar.css'

const SnackBar = ({label,color,...props}) => {
    return (
            <div className={`snackbar ${color}`}>{label}</div>
    )
}

export default SnackBar
