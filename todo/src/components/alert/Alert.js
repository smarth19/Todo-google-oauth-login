import React, { useEffect, useRef, useState } from 'react'
import styles from './alert.module.css'

const Alert = ({data, unmountAlert}) => {
    const [toClose, setToClose] = useState(false)

    let timeOut = useRef(null)

    useEffect(() => {
        timeOut.current = setTimeout(() => initiateClose(), 3000);
        return () => clearTimeout(timeOut.current)
    }, [])

    const initiateClose = () => {
        clearTimeout(timeOut.current)
        setToClose(true)
    }
    const animationEnd = e => {
        if(e.animationName === styles.slideUp) unmountAlert(data.index)
    }

    return (
        <div onAnimationEnd={animationEnd} className={`${styles.alert} ${styles.slideIn} ${toClose ? styles.slideUp : ""}`}>
            <h2>{data.text}</h2>
            <div onClick={initiateClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </div>
    )
}

export default Alert
