interface UserEvents{
    id:number
    title:string,
    dateStart:string,
    dateEnd:string

}



const userEventsReducer=(state,action)=>{
    switch (action.type){
        default:
            return state;
    }

};
export default userEventsReducer;