interface UserEvents{
    id:number;
    title:string;
    dateStart:string;
    dateEnd:string;

}
interface UserEventsReducer{//for normalising data

}


const userEventsReducer=(state,action)=>{
    switch (action.type){
        default:
            return state;
    }

};
export default userEventsReducer;