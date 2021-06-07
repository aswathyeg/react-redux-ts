import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDateStart, start } from '../../redux/recorder';
import './Recorder.css';
import cx from 'classnames';
const Recorder=()=>{
   const dispatch=useDispatch();
   const dateStart=useSelector(selectDateStart);//to read state
   const started=dateStart!='';
   let interval=useRef<number>();

   const handleClick=()=>{
    dispatch(start());
    interval.current=window.setInterval(()=>{},1000);

    };
return(
    <div className={cx('recorder',{'recorder-started':started})}  >
        <button onClick={handleClick} className="recorder-record">
            <span></span>
            </button>
            <div className="recorder-counter">00:00:00</div>

    </div>
)
}
export default Recorder;