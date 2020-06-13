import React from 'react';
import './Snake.css';

const Snake=(props)=>{
    const snake=props.snakeDots.map((dot,i)=>{
        const style={
            left:`${dot[0]}%`,
            top:`${dot[1]}%`
        }
        return <div className='snake-dot' key={i} style={style}></div>
    });
    return(
    <div>{snake}</div>
    );
}
export default Snake;