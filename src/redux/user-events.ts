import { AnyAction } from "redux";

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


const userEventsReducer=(state:UserEventsState=initialState
    ,action:AnyAction)=>{
    switch (action.type){
        default:
            return state;
    }

};
export default userEventsReducer;