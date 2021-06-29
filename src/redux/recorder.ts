import { type } from "os";
import { Action } from "redux";
import { RootState } from "./store";

interface RecorderState {
    dateStart: string;
} //for state

//for 2 types of actions
const START = 'recorder/start';
const STOP = 'recorder/stop';

//describing action objects
type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

//action creaters
export const start = (): StartAction => ({
    type: START

});
export const stop = (): StopAction => ({
    type: STOP

});
 
//select function for read the state
export const selectRecorderState=(rootState:RootState)=>rootState.recorder;
export const selectDateStart=(rootState:RootState)=>
selectRecorderState(rootState).dateStart;

const initialState: RecorderState = {
    dateStart: ''
} //

const recorderReducer = (state: RecorderState = initialState,
    action: StartAction | StopAction) => {
    switch (action.type) {
        case START:
            return { ...state, dateStart: new Date().toISOString() };
        case STOP:
            return { ...state, dateStart: '' };

        default:
            return state;
    };

}
export default recorderReducer;