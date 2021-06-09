import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDateStart, start } from '../../redux/recorder';
import './Recorder.css';
import cx from 'classnames';

const Recorder=()=>{
   const dispatch=useDispatch();
   const dateStart=useSelector(selectDateStart);//to read state
   const started=dateStart!='';
   let interval=useRef<number>(0);
   const [,setCount]=useState<number>(0);

   const handleClick=()=>{
    dispatch(start());
    interval.current=window.setInterval(()=>{
        setCount(count=>count+1);
    },1000);
    
   };

   useEffect(()=>{
       return()=>{
           window.clearInterval(interval.current);
       };
   },[]);
let seconds=started? Math.floor((Date.now()-new Date(dateStart).getTime())/1000) :0;


const hours=seconds ? Math.floor (seconds / 60 / 60):0;
seconds-=hours*60*60;
return(
    <div className={cx('recorder',{'recorder-started':started})}  >
        <button onClick={handleClick} className="recorder-record">
            <span></span>
            </button>
            <div className="recorder-counter">00:00:00</div>

    </div>
)
}
export default Recorder;selectDateStart