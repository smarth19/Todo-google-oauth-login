import React from 'react'

const Loading = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "rgba(0 0 0 / .5)",
        width: "100%",
        height: "100%",
        zIndex: 20
    }
    return (
        <div style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx={50} cy={50} r={32} strokeWidth={8} stroke="#0a0a0a" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50" />
            </circle>
            <circle cx={50} cy={50} r={23} strokeWidth={8} stroke="#28292f" strokeDasharray="36.12831551628262 36.12831551628262" strokeDashoffset="36.12831551628262" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50" />
            </circle></svg>
        </div>
    )
}

export default Loading
