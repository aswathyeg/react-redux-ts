import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserEvent, UserEvent } from '../../redux/user-events';
import './Calendar.css';
interface Props{
    event:UserEvent;
}
const EventItem :React.FC<Props>=({event})=>{
    const dispatch=useDispatch();
    const handleDeleteClick=()=>{
        dispatch(deleteUserEvent(event.id));
      };
      const [editable,setEditable]=useState(false);
      const handleTitleClick=()=>{
        setEditable(true);

      }
return(
    
     
        <div className="calendar-event">
          <div className="calendar-event-info">
            <div className="calendar-event-time">10:00 - 12:00</div>
            <div className="calendar-event-title">
              {editable?(
              <input type="text"  value={event.title}/>):(
              <span onClick={handleTitleClick}>{event.title}</span>)}</div>
          </div>
          <button className="calendar-event-delete-button" onClick={handleDeleteClick}>
            &times;
          </button>
        </div>
      );

};
export default EventItem;
