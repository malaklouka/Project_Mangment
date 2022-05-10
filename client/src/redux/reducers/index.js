import {combineReducers} from "redux"
import { projectReducer } from "./projectReducer"
import { taskReducer } from "./taskReducer"
import { userReducer } from "./userReducer"



export const rootReducer=combineReducers({projectReducer, taskReducer, userReducer})