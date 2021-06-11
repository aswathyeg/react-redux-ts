import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

interface UserEvents{
    id:number;
    title:string;
    dateStart:string;
    dateEnd:string;

}
interface UserEventsState{ //for normalising data
    byIds:Record<UserEvents['id'],UserEvents>; //Extract 'id' as key and value as object
    allIds:UserEvents['id'][]; //returs a number array
}
const initialState:UserEventsState={
    byIds:{}  ,
    allIds:[]
}
const LOAD_REQUIEST='userEvents/load_request';
interface LoadRequestAction extends Action<typeof LOAD_REQUIEST>{}

export const loadUserEvents=():ThunkAction<
void,
RootState,
undefined,
LoadRequestAction
 > => async(dispatch,getState)=>{
    dispatch({
        type:LOAD_REQUIEST
    });
    try{
const response=await fetch('http://localhost:3001/events');
const events:UserEvents[]=await response.json();
    }
    catch(e){

    }

};


const userEventsReducer=(state:UserEventsState=initialState
    ,action:AnyAction)=>{
    switch (action.type){
        default:
            return state;
    }

};
export default userEventsReducer;