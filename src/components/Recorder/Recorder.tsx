import React from 'react';
import { useDispatch } from 'react-redux';
import { start } from '../../redux/recorder';
import './Recorder.css';
const Recorder=()=>{
   const dispatch=useDispatch();
   const handleClick=()=>{
    dispatch(start());
    }
return(
    <div className="recorder">
        <button onClick={handleClick} className="recorder-record">
            <span></span>
            </button>
            <div className="recorder-counter">00:00:00</div>

    </div>
)
}
export default Recorder;