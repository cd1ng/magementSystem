const defaultUserState = {
  userName: 'default',
  token:""
}
const UserReducer=(state = defaultUserState, action) => {
  switch (action.type) {
    case "login_out":
      return { ...state, ...defaultUserState};
    case "login_in":
      return {
        ...state,
        userName:action.userName,
        token:action.token,
      };
    default:
      return state;
  }
};
export default UserReducer
