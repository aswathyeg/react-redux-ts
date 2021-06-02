interface UserEvents{
    id:number;
    title:string;
    dateStart:string;
    dateEnd:string;

}
interface UserEventsReducer{//for normalising data
    byIds:Record<UserEvents['id'],UserEvents>;//Extract 'id' as key and value as object

}


const userEventsReducer=(state,action)=>{
    switch (action.type){
        default:
            return state;
    }

};
export default userEventsReducer;