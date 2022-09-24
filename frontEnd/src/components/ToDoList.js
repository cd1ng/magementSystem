import React, {useEffect, useReducer, useRef,useCallback } from "react";

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

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = ''
  }, [])

  const handleAdd = useCallback(() => {
    dispatch({ type: 'Add-Item', name: inputRef.current.value })
    inputRef.current.focus()
    inputRef.current.value = ''
  },[])

  const handleRemove = useCallback((index)=>{
    dispatch({ type: 'remove', index })
  },[])

  return (
    <div>
      <ul>
        {state.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(index)}>删除</button>
          </li>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>添加信息</button>
    </div>
  );
}
export default ToDoList
