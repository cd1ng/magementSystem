import { LOGIN_IN, LOGIN_OUT } from "./constants"

export const loginInAction = (data: any) => {
  return {
    type: LOGIN_IN,
    userName: data.userName,
    token: data.token,
    // path: data.path.split(",").map(Number),
    path: data.path,
  }
}

export const loginOutAction = () => {
  return {
    type: LOGIN_OUT,
    userName: "",
    token: "",
    path: [],
  }
}
