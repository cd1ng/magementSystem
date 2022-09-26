import React, { useReducer, useRef,useCallback } from "react";
import { CloseCircleOutlined} from '@ant-design/icons';
import { message } from "antd";
function ToDoList() {
  const initialState = []
  const inputRef = useRef()
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Add-Item':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ]
      case 'remove':
        return state.filter((value,index) => index !== action.index)
      case 'clear':
        return [];
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAdd = useCallback(() => {
    if(inputRef.current.value.trim()===''){
      message.info('输入不得为空');
    }else{
      dispatch({ type: 'Add-Item', name: inputRef.current.value })
      inputRef.current.focus()
      inputRef.current.value = ''
    }
  },[])

  const handleRemove = useCallback((index)=>{
    dispatch({ type: 'remove', index })
  },[])
  
  return (
    <div>
      <ul style={{height:"280px",overflow:"auto"}}>
        {state.map((item, index) => (
          <li key={item.id} style={{display:"flex",justifyContent:"space-between",width:"400px",fontSize:"18px",borderBottom:"1px dashed #ddd",marginBottom:"4px",lineHeight:"24px"}} >
            {item.name}
            <CloseCircleOutlined onClick={() => handleRemove(index)} />
          </li>
        ))}
      </ul>
      <input type="text" ref={inputRef} style={{marginLeft:"40px",width:"250px"}}/>
      <button onClick={handleAdd} style={{marginLeft:"80px"}}>添加信息</button>
    </div>
  );
}
export default ToDoList
