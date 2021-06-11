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

const LOAD_SUCCESSS='userEvents/load_success';
interface LoadSuccessAction extends Action<typeof LOAD_SUCCESSS>{
    payload:{
        events:UserEvents[]
    }
}
const LOAD_FAILURE='userEvents/load_failure'
interface LoadFailureAction extends Action<typeof LOAD_FAILURE>{
    error:string;
}

export const loadUserEvents=():ThunkAction<
void,
RootState,
undefined,
LoadRequestAction | LoadSuccessAction | LoadFailureAction

 > => async(dispatch,getState)=>{
    dispatch({
        type:LOAD_REQUIEST
    });
    try{
const response=await fetch('http://localhost:3001/events');
const events:UserEvents[]=await response.json();
dispatch({
    type:LOAD_SUCCESSS,
    payload:{events}
});

    }
    catch(e){
        dispatch({
            type:LOAD_FAILURE,
            error:"Failed to load events."
        });

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