import { combineReducers } from "redux"
import UserReducer from "./UserReducer"
import LanguageReducer from "./LanguageReducer"

const rootReducer = combineReducers({
  LanguageReducer,
  UserReducer,
})
export default rootReducer
