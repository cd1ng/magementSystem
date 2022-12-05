import { fromJS } from "immutable"
import { LOGIN_IN, LOGIN_OUT } from "./constants"

const defaultUserState = {
  userName: "",
  token: "",
  path: [],
}

interface userAction {
  type: string
  userName: string
  token: string
  path: Array<number>
}

function UserReducer(state = defaultUserState, action: userAction) {
  const { type, userName, token, path } = action
  let obj: any = fromJS(state)
  switch (type) {
    case LOGIN_IN:
      return obj
        .set("userName", userName)
        .set("token", token)
        .set("path", path)
        .toJS()
    case LOGIN_OUT:
      return obj.set("userName", "").set("token", "").set("path", []).toJS()
    default:
      return state
  }
}
export default UserReducer
