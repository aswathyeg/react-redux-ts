import { type } from "os";
import { Action } from "redux";

interface RecorderState{
    dateStart:string;
} //for state

//for 2 types of actions
const START='recorder/start';
const STOP='recoder/stop';

type StartAction=Action<typeof START>;
type StopAction=Action<typeof STOP>;

//action creaters
 export const start=(): StartAction=>({
   type:START

});
export const stop=(): StopAction=>({
    type:STOP
 
 });

const recorderReducer=(state:RecorderState,action)=>{
    switch (action.type){
       default:
        return state;
    };

}
export default recorderReducer;