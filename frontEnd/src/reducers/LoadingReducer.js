// 维护应用程序的状态
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
export const DataList = () =>{
  const dispatch = useDispatch();
  // 在组件初次加载时发起请求
  useEffect(() => {
    // 请求发送出去时：设置 state.pending = true，用于 UI 显示加载中的状态；
    dispatch({ type: 'FETCH_DATA_BEGIN' });
    fetch('/some-url').then(res => {
      // 请求发送成功时：设置 state.pending = false, state.data = result。即取消 UI 的加载状态，同时将获取的数据放到 store 中用于 UI 的显示。
      dispatch({ type: 'FETCH_DATA_SUCCESS', data: res });
    }).catch(err => {
    // 请求发送失败时：设置 state.pending = false, state.error = error。即取消 UI 的加载状态，同时设置错误的状态，用于 UI 显示错误的内容。
      dispatch({ type: 'FETCH_DATA_FAILURE', error: err });
    })
  }, []);
  // 绑定到 state 的变化
  const data = useSelector(state => state.data);
  const pending = useSelector(state => state.pending);
  const error = useSelector(state => state.error);
  // 根据 state 显示不同的状态
  if (error) {
    return 'Error.'
  }
  if (pending) {
    return 'Loading...'
  }
  return <div>
    {data}
  </div>
}
